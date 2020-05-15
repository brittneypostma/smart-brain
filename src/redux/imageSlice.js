import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { postImage } from '../api/imageApi'

export const sendImage = createAsyncThunk(
  'image/sendImage',
  async (imageUrl, thunkAPI) => {
    const response = await postImage(imageUrl)
    return response
  }
)

const imageSlice = createSlice({
  name: 'image',
  initialState: {
    loading: false,
    hasError: false,
    imageUrl: '',
    box: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    }
  },
  reducers: {
    getImage: (state, { payload }) => {
      state.loading = true
    },
    getImageSuccess: (state, { payload }) => {
      console.log(state, payload)
    },
    getImageFailure: (state, { payload }) => {
      console.log(state, payload)
      state.loading = false
      state.hasError = true
    },
    setImageUrl: (state, { payload }) => {
      state.imageUrl = payload
    }
  },
  extraReducers: {
    [sendImage.fulfilled]: (state, { payload }) => {
      let {top_row, right_col, bottom_row, left_col} = payload['outputs'][0]['data']['regions'][0]['region_info']['bounding_box']
      state.box = {
        top: top_row,
        right: right_col,
        bottom: bottom_row,
        left: left_col
      }
  
    }
  }
})

const { actions, reducer } = imageSlice

export const {
  getImage,
  getImageFailure,
  getImageSuccess,
  setImageUrl
} = actions

export default reducer

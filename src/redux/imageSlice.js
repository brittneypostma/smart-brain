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
    hasError: false,
    imageUrl: '',
    boxes: [],
    isLoaded: false
  },
  reducers: {
    setImageUrl: (state, { payload }) => {
      state.imageUrl = payload
    }
  },
  extraReducers: {
    [sendImage.fulfilled]: (state, { payload }) => {
      state.isLoaded = false
      const data = payload.outputs[0].data.regions.map(boundingBox => {
        let bb = boundingBox.region_info.bounding_box
        return {
          top: bb.top_row,
          left: bb.left_col,
          right: bb.right_col,
          bottom: bb.bottom_row
        }
      })
      state.isLoaded = true
      state.boxes = data
    }
  }
})

const { actions, reducer } = imageSlice

export const { setImageUrl } = actions

export default reducer

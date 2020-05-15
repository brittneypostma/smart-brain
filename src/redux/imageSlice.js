import { createSlice } from '@reduxjs/toolkit'

const imageSlice = createSlice({
  name: 'user',
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
    getFaceLocation: (state, { payload }) => {
      // const clarifaiFace =
      // data.outputs[0].data.regions[0].region_info.bounding_box
    },
    setImageUrl: (state, { payload }) => {}
  }
})

const { actions, reducer } = imageSlice

export const {
  getImage,
  getImageFailure,
  getImageSuccess,
  getFaceLocation
} = actions

export default reducer

export function fetchApi(imageUrl) {
  return async dispatch => {
    dispatch(getImage())
    try {
      const imageFetch = await fetch(
        'https://smart-brain-backend-bdesigned.herokuapp.com/imageurl',
        {
          method: 'post',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({
            input: imageUrl
          })
        }
      )
      const data = await imageFetch.json()
      dispatch(getImageSuccess(data))
    } catch {
      dispatch(getImageFailure)
    }
  }
}

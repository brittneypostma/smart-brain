import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import imageReducer from './imageSlice'

export default combineReducers({
  user: userReducer,
  image: imageReducer
})

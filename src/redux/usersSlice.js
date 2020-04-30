import {createSlice} from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUser(state, action) {
      const {
        id,
        email,
        name,
        entries
      } = action.payload
      const joined = new Date().toLocaleDateString
      state.push({
        id,
        email,
        name,
        joined,
        entries
      })
    }
  }
})

export const {
  addUser
} = usersSlice.actions

export default usersSlice.reducers
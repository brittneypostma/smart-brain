import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
    isSignedIn: false
  },
  reducers: {
    loadUser: (state, { payload }) => {
      console.log(state, payload)
      // const { id, name, email, entries, joined } = payload
    }
  }
})

const { actions, reducer } = userSlice

export const { addSection } = actions

export default reducer

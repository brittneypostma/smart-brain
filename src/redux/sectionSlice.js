import { createSlice } from "@reduxjs/toolkit";


const sectionSlice = createSlice({
  name: 'modal',
  initialState: [],
  reducers: {
    addSection(state, action) {
      console.log(action.payload)
      state.push(action.payload);
    }
  }
})

export const { addSection } = sectionSlice.actions;

export default sectionSlice.reducer;
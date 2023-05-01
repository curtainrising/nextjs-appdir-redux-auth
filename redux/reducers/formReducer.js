import { createSlice } from '@reduxjs/toolkit'

const initialState = {
}

export const formSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      let payload = action.payload;
      let ids = Object.keys(payload);
      ids.forEach(id => {
        state[id] = payload[id]
      })
      return state;
    },
    removeFormData: (state, action) => {
      let payload = action.payload;
      if (payload && payload.length) {
        payload.forEach(item => {
          delete state[item];
        })
      }
      return state;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFormData, removeFormData } = formSlice.actions

export default formSlice.reducer

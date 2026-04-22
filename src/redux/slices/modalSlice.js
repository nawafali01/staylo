import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    selectedPlan: null,    // 'free' | 'monthly' | 'yearly'
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true
    },
    closeModal: (state) => {
      state.isOpen = false
      state.selectedPlan = null
    },
    selectPlan: (state, action) => {
      state.selectedPlan = action.payload
    }
  }
})

export const { openModal, closeModal, selectPlan } = modalSlice.actions
export default modalSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    selectedPlan: null,    // 'free' | 'monthly' | 'yearly'
    addPropertyModalOpen: false,
    approveListingsModalOpen: false,
    generateReportsModalOpen: false,
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
    },
    openAddPropertyModal: (state) => {
      state.addPropertyModalOpen = true
    },
    closeAddPropertyModal: (state) => {
      state.addPropertyModalOpen = false
    },
    openApproveListingsModal: (state) => {
      state.approveListingsModalOpen = true
    },
    closeApproveListingsModal: (state) => {
      state.approveListingsModalOpen = false
    },
    openGenerateReportsModal: (state) => {
      state.generateReportsModalOpen = true
    },
    closeGenerateReportsModal: (state) => {
      state.generateReportsModalOpen = false
    }
  }
})

export const { 
  openModal, closeModal, selectPlan, 
  openAddPropertyModal, closeAddPropertyModal,
  openApproveListingsModal, closeApproveListingsModal,
  openGenerateReportsModal, closeGenerateReportsModal
} = modalSlice.actions
export default modalSlice.reducer
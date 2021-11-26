import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggleModal(state) {
      state.showModal = !state.showModal;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;

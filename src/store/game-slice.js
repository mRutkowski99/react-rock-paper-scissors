import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const gameSlice = createSlice({
  name: "game",
  initialState: initialState,
  reducers: {},
});

export const gameActions = gameSlice.actions;
export default gameSlice;

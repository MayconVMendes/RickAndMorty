import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "search",
  initialState: {
    isResult: false,
    result: "",
  },
  reducers: {
    searchDados(state, { payload }) {
      return { ...state, isResult: true, result: payload };
    },
    clearDados(state) {
      return { ...state, isResult: false, result: "" };
    },
  },
});

export const { searchDados, clearDados } = slice.actions;

export const searchDadosState = (state) => state.search;

export default slice.reducer;

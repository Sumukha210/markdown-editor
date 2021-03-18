import { createSlice } from "@reduxjs/toolkit";

export const inputDataSlice = createSlice({
  name: "inputData",
  initialState: {
    fileName: "",
    inputData: "",
  },
  reducers: {
    CHANGE__INPUTDATA: (state, action) => {
      state.inputData = action.payload;
    },

    CHANGE__FILENAME: (state, action) => {
      state.fileName = action.payload;
    },

    CLEAR__FILENAME: state => {
      state.fileName = "";
    },

    CLEAR__INPUTDATA: state => {
      state.inputData = "";
    },
  },
});

export const {
  CHANGE__FILENAME,
  CHANGE__INPUTDATA,
  CLEAR__FILENAME,
  CLEAR__INPUTDATA,
} = inputDataSlice.actions;

export default inputDataSlice.reducer;

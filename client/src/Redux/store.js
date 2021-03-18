import { configureStore } from "@reduxjs/toolkit";
import inputDataReducer from "./InputData";

export default configureStore({
  reducer: {
    inputData: inputDataReducer,
  },
});

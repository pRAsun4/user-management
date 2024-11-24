import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../store/appSlice/AppSlice"


const store = configureStore({
  reducer: {
    app: appReducer, // Add your appSlice reducer here
  },
});

export default store;

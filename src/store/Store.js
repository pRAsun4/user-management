import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../store/appSlice/AppSlice"


const store = configureStore({
  reducer: {
    app: appReducer, 
  },
});

export default store;

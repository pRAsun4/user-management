import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarVisible: false,
  asideVisible: false
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarVisible = !state.sidebarVisible;
    },
    toggleAsidebar: (state) => {
      state.asideVisible = !state.asideVisible;
    }
    
  },
});

export const { toggleSidebar, toggleAsidebar } = appSlice.actions;
export default appSlice.reducer;

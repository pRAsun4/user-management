import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarVisible: false,
  asideVisible: false,
  userId: ''
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
    },
    setUserId: (state, action) => {
      state.userId = action.payload; 
    },
    resetUserId: (state) => {
      state.userId = ""; 
    },
    
  },
});

export const { toggleSidebar, toggleAsidebar, setUserId, resetUserId } = appSlice.actions;
export default appSlice.reducer;

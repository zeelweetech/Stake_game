import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginModelOpen: false,
  isRegisterModelOpen: false,
  isForgotPasswordModelOpen: false,
  isVerifyTermModelOpen: false,
  wallet: '',
  anchorEl: null,
  openMenubar: false,

  // profilePopupOpen state
  tooltipOpen: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openLoginModel: (state) => {
      state.isLoginModelOpen = true;
    },
    closeLoginModel: (state) => {
      state.isLoginModelOpen = false;
    },
    openRegisterModel: (state) => {
      state.isRegisterModelOpen = true;
    },
    closeRegisterModel: (state) => {
      state.isRegisterModelOpen = false;
    },
    openForgotPasswordModel: (state) => {
      state.isForgotPasswordModelOpen = true;
    },
    closeForgotPasswordModel: (state) => {
      state.isForgotPasswordModelOpen = false;
    },
    openVerifyTermModel: (state) => {
      state.isVerifyTermModelOpen = true;
    },
    closeVerifyTermModel: (state) => {
      state.isVerifyTermModelOpen = false;
    },
    setWallet: (state, action) => {
      state.wallet = action.payload;
    },
    setAnchorEl: (state, action) => {
      state.anchorEl = action.payload;
    },
    setTooltipOpen: (state, action) => {
      state.tooltipOpen = action.payload
    },
    setOpenMenubar: (state, action) => {
      state.openMenubar = action.payload
    }
  },
});

export const {
  openLoginModel,
  closeLoginModel,
  openRegisterModel,
  closeRegisterModel,
  openForgotPasswordModel,
  closeForgotPasswordModel,
  openVerifyTermModel,
  closeVerifyTermModel,
  setWallet,
  setAnchorEl,
  setTooltipOpen,
  setOpenMenubar
} = authSlice.actions;

export default authSlice.reducer;

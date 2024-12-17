import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBetslipOpen: false,
};

export const betSlipSlice = createSlice({
  name: "betslip",
  initialState,
  reducers: {
    openBetslipModal: (state) => {
      state.isBetslipOpen = true;
    },
    closeBetslipModal: (state) => {
      state.isBetslipOpen = false;
    },
  },
});

export const { openBetslipModal, closeBetslipModal } = betSlipSlice.actions;
export default betSlipSlice.reducer;

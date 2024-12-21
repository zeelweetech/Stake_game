import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBetslipOpen: false,
  isType: "betslips"
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
    setIsType: (state, action) => {
      state.isType = action.payload;
    },
  },
});

export const { openBetslipModal, closeBetslipModal, setIsType } = betSlipSlice.actions;
export default betSlipSlice.reducer;

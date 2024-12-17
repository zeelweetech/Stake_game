import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isChatOpen: false,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    openChatModal: (state) => {
      state.isChatOpen = true;
    },
    closeChatModal: (state) => {
      state.isChatOpen = false;
    },
  },
});

export const { openChatModal, closeChatModal } = chatSlice.actions;
export default chatSlice.reducer;

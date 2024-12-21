import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isChatOpen: false,
  isChat: "chats"
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
    setChatType: (state, action) => {
      state.isChat = action.payload;
    },

  },
});

export const { openChatModal, closeChatModal, setChatType } = chatSlice.actions;
export default chatSlice.reducer;

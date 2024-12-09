import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isChatOpen: false,
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        isChatModelOpen: (state) => {
            state.isChatOpen = true;
       
        },
        closeChatModal: (state) => {
            state.isChatOpen = false;
        }
    },
});

export const { isChatModelOpen,  closeChatModal } = chatSlice.actions;
export default chatSlice.reducer;

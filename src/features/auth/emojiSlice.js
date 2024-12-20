
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedEmoji: null,
};

const emojiSlice = createSlice({
  name: 'emoji',
  initialState,
  reducers: {
    setEmoji: (state, action) => {
      state.selectedEmoji = action.payload;
    },
    addEmoji: (state, action) => {
      state.emojiList.push(action.payload);
    },
    setSettings: (state, action) => {
      state.settings = { ...state.settings, ...action.payload };
    },
  },
});

export const { setEmoji, addEmoji, setSettings } = emojiSlice.actions;
export default emojiSlice.reducer;
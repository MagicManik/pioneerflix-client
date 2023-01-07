import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  voice: false,
};

export const voiceSearchSlice = createSlice({
  name: "voiceSearch",
  initialState,
  reducers: {
    voiceSearchOn: (state) => {
      state.voice = !state.voice;
    },
    voiceSearchOff: (state) => {
      state.voice = false;
    },
  },
});

export const { voiceSearchOn, voiceSearchOff } = voiceSearchSlice.actions;
export default voiceSearchSlice.reducer;

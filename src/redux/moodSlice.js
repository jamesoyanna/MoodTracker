import { createSlice } from "@reduxjs/toolkit";

const moodSlice = createSlice({
  name: "moods",

  initialState: [],
          
  reducers: {
    addMood: (state, action) => {
      const newMood = {
        id: Date.now(),
        emoji: action.payload.emoji,
        message: action.payload.message,
        hasMood: true,
      };
      state.push(newMood);
    }, 

  },
});

export const { addMood } = moodSlice.actions;
export default moodSlice.reducer;

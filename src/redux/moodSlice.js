import { createSlice } from "@reduxjs/toolkit";


   const initialState = {
     value: [],
     showMood: false,
   };
const moodSlice = createSlice({
  name: "moods",
initialState,

  reducers: {
    addMood: (state, action) => {
      const newMood = {
        id: Date.now(),
        emoji: action.payload.emoji,
        message: action.payload.message,
      };
      state.value.push(newMood);
    },
    addToggleMood: (state, action) => {
      state.showMood = action.payload;
    
    },
  },
});

export const { addMood, addToggleMood } = moodSlice.actions;
export default moodSlice.reducer;

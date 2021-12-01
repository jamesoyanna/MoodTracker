import { createSlice } from "@reduxjs/toolkit";

const moodSlice = createSlice({
  name: "moods",
  initialState: [{ id: 0, title: "" }],
  reducers: {
    addMood: (state, action) => {
      const newMood = {
        id: Date.now(),
        title: action.payload.title,
        message: "Cat is super exited man",
      };
      state.push(newMood);
    },
  },
});

export const { addMood } = moodSlice.actions;

export default moodSlice.reducer;

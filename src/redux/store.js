import { configureStore } from "@reduxjs/toolkit";
import moodReducer from "./moodSlice";

export default configureStore({
  reducer: {
    moods: moodReducer,
  },
});

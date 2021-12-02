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
      
      console.log("State is", newMood);

      state.push(newMood);
    },
    
    // selectMood: (state, action) => {
    //   const newMessage = state.message
    //  newMessage.map((item) => {
    //    if (action.payload === item.id) {
    //      item.message = "I am coming";
    //    } else if (action.payload === item.id) {
    //      item.message = "You are welcome";
    //    } else {
    //      item.message = "Cat was not happy";
    //    }
    //    return newMessage;
    //  });
     
    // }
     

  },
});

export const { addMood, toogleMood } = moodSlice.actions;
export const selectMood = state => state.moods
export default moodSlice.reducer;

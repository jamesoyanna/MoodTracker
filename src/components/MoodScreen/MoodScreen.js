import React, {useState} from "react";
 
import { useDispatch } from "react-redux";
import { addMood } from "../../redux/moodSlice";

import Cat from "../../images/image.png";
import "./moodScreen.css";


const MoodScreen = () => {
 const [value, setValue] = useState("");  

 const dispatch = useDispatch();

 const HandleSaveMood = () => {
   dispatch(addMood({ title: value }));
   console.log(value);
   setValue("");
 };


  const handleHappyMood = () => {
    setValue("😃");
  }

  const handleSadMood = () => {
    setValue("😖");
  };


   const handleFunnyMood = () => {
     setValue("😐");
   };

  return (
    <div className="mood__screen">
      <div>
        <img src={Cat} alt="lol" />
        <p>
          What's your cat's
          <br /> current mood ?
        </p>
      </div>

      <ul className="emoji__list">
        <li onClick={handleHappyMood} value={value} className="emoji">
          😃
        </li>
        <li onClick={handleFunnyMood} value={value} className="emoji">
          😐
        </li>
        <li onClick={handleSadMood} value={value} className="emoji">
          😖
        </li>
      </ul>

      <p className="screen__text">Cat is super excited ! </p>
      <div className="center">
        <button onClick={HandleSaveMood} className="btn">
          Save mood
        </button>
      </div>
    </div>
  );
};

export default MoodScreen;

import React, {useState} from "react";
 import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux";
import { addMood, selectMood } from "../../redux/moodSlice";

import Cat from "../../images/image.png";
import "./moodScreen.css";


const MoodScreen = (props) => {
 const [value, setValue] = useState(""); 
 const [moodMessage, setMoodMessage] = useState("")


 const [isToggle, setIsTogggle] = useState(true);  

 const dispatch = useDispatch();

 const HandleSaveMood = () => {
   dispatch(addMood({ emoji: value, message: moodMessage }));
   //dispatch(toogleMood());
   console.log(value);
   setValue("");
  //  setIsTogggle(true)
 
 };


  const handleHappyMood = () => {
    setValue("😃");
    setMoodMessage("Cat was super excited!")
  }

  const handleSadMood = () => {
     setMoodMessage("Cat wasn't having it");
    setValue("😖");
  };


   const handleFunnyMood = (id) => {
       setMoodMessage("Cat was indifferent");
     setValue("😐");
   };

  return (
    <div className="mood__screen">
      <div>
        <img src={Cat} alt="cat" />
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

      <p className="screen__text">{props.message} </p>
      <div className="center">
        <button onClick={HandleSaveMood} className="btn">
          Save mood
        </button>
      </div>
    </div>
  );
};

export default MoodScreen;

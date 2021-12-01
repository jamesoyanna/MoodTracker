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


  return (
    <div className="mood__screen">
      <div>
        <img src={Cat} alt="lol" />
        <p>
          What's your cat's
          <br /> current mood ?
        </p>
      </div>
      {/* <ul
        className="emoji__list"
        onChange={(event) => setValue(event.target.value)}
      >
        <li className="emoji">😃</li>
        <li className="emoji">😐</li>
        <li className="emoji">😖</li>
      </ul> */}

      <select value={value} onChange={(event) => setValue(event.target.value)}>
        <option>😖</option>
        <option>😐</option>
        <option>😃</option>
      </select>

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

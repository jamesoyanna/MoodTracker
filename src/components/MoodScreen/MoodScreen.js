import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMood, addToggleMood } from "../../redux/moodSlice";
import Cat from "../../images/image.png";
// import syling
import "./moodScreen.css";


const MoodScreen = () => {
 const [value, setValue] = useState(""); 
 const [moodMessage, setMoodMessage] = useState("");

   let isMood = true;

 const dispatch = useDispatch();

 // Handling save mood when button is clicked
 const HandleSaveMood = () => {
   dispatch(
     addMood({ emoji: value, message: moodMessage})
   );


    dispatch(
      addToggleMood(isMood)
    );

   setValue("");
 };

  const handleHappyMood = () => {
    setValue("😃");
    setMoodMessage("Cat was super excited!")
  }

  const handleSadMood = () => {
     setMoodMessage("Cat wasn't having it");
    setValue("😖");
  };


   const handleFunnyMood = () => {
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
        <li onClick={handleSadMood} value={value} className="emoji">
          {" "}
          😖
        </li>
        <li onClick={handleFunnyMood} value={value} className="emoji">
          😐
        </li>
        <li onClick={handleHappyMood} value={value} className="emoji">
          😃
        </li>
      </ul>
      {moodMessage === "Cat was super excited!" && (
        <p style={{ color: "#1D9A39"}} className="screen__text">
          {moodMessage}
        </p>
      )}
      {moodMessage === "Cat wasn't having it" && (
        <p style={{ color: "red", marginTop: "45px" }}>{moodMessage} </p>
      )}
      {moodMessage === "Cat was indifferent" && (
        <p style={{ color: "#FF9635" }} className="screen__text">
          {moodMessage}
        </p>
      )}

      <div className="center">
        <button
          disabled={!value || !moodMessage}
          onClick={HandleSaveMood}
          className="btn btn-disabled"
        >
          Save mood
        </button>
      </div>
    </div>
  );
};

export default MoodScreen;

import React from "react";
import Cat from "../../images/image.png";
import "./moodScreen.css";

const MoodScreen = () => {
  

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
        <li className="emoji">😃</li>
        <li  className="emoji">
          😐
        </li>
        <li  className="emoji">
          😖
        </li> 
      </ul>

      <p className="screen__text">Cat is super excited ! </p>
      <div className="center">
        <button  className="btn">
          Save mood
        </button>
      </div>
    </div>
  );
};

export default MoodScreen;

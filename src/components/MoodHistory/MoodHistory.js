import React from "react";
import Mood from "../Mood/Mood";
import Cat from "../../images/image.png";
import "./moodHistory.css";

const  MoodHistory = () => {
  const mood = false;
  return (
    <div className="moodhistory__container">
      <div>
        <div className="header">
          <img src={Cat} alt="cat" />
          <h4 className="title">Cat mood tracker™</h4>
        </div>

        <p className="mood__text">mood history</p>
        {mood ? (
          <div className="mood__card">
            <p className="mood__card__text">
              No mood history <br /> to show yet yet
            </p>
          </div>
        ) : (
             <Mood />
        )}
      </div>
    </div>
  );
}

export default MoodHistory;

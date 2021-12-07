import React from "react";
import { useSelector } from "react-redux";
import Mood from "../Mood/Mood";
import Cat from "../../images/image.png";
import "./moodHistory.css";


const MoodHistory = () => {

  const moods = useSelector((state) => state.moods.value);
   const showMood = useSelector((state) => state.moods.showMood);

  return (
    <div className="moodhistory__container">
      <div className="header">
        <img src={Cat} alt="cat" />
        <h4 className="title">Cat mood tracker™</h4>
      </div>
      <p className="mood__text">mood history</p>

      {showMood ? (
        <ul>
          {moods.map((mood) => (
            <Mood
              key={mood.id}
              id={moods.id}
              title={mood.emoji}
              message={mood.message}
            />
          ))}
        </ul>
      ) : (
        
          <div className="mood__card">
            <p className="mood__card__text">
              No mood history <br /> to show yet yet
            </p>
          </div>
      )}
    </div>
  );
};

export default MoodHistory;


 
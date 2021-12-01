import React from "react";
import { useSelector } from "react-redux";

import Mood from "../Mood/Mood";
import Cat from "../../images/image.png";
import "./moodHistory.css";

const  MoodHistory = () => {
 
  const moods = useSelector((state) => state.moods);

 // const mooder = false;
  return (
    <div className="moodhistory__container">
      <div>
        <div className="header">
          <img src={Cat} alt="cat" />
          <h4 className="title">Cat mood tracker™</h4>
        </div>

        <p className="mood__text">mood history</p>
        { !moods ? (
          <div className="mood__card">
            <p className="mood__card__text">
              No mood history <br /> to show yet yet
            </p>
          </div>
        ) : (
          <ul>
            {moods.map((mood) => (
              <Mood id={moods.id} title={mood.title} message={mood.message} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default MoodHistory;

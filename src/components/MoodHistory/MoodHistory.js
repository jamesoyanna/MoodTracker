import React from "react";
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
          <h5>See out</h5>
          //   <Mood key={todos.id} todo={todos} />
        )}
      </div>
    </div>
  );
}

export default MoodHistory;

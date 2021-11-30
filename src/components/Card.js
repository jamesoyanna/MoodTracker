import React from 'react';
import MoodScreen from "./MoodScreen/MoodScreen";

const Card = () => {
    return (
      <div className="card__container">
        <div className="output">
          <MoodScreen />
        </div>
      </div>
    );
}

export default Card;

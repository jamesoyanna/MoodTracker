import React from 'react';
import MoodScreen from "./MoodScreen/MoodScreen";
import MoodHistory from './MoodHistory/MoodHistory';

const Card = () => {
    return (
      <div className="card__container">
        <div className="output">
          <MoodScreen />
          <MoodHistory />
        </div>
      </div>
    );
}

export default Card;

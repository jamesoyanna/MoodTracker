import React from "react";
import { useSelector } from "react-redux";
import Mood from "../Mood/Mood";
import Cat from "../../images/image.png";
import "./moodHistory.css";


const MoodHistory = () => {
  //const [isMood, setIsMood] = useState(true);
  const isMood = true;
  const moods = useSelector((state) => state.moods);

    //  const toggleMood = () => {
    //    setIsMood(true);
    //  };



  return (
    <div className="moodhistory__container">
      <div>
        <div className="header">
          <img src={Cat} alt="cat" />
          <h4 className="title">Cat mood tracker™</h4>
        </div>
        <p className="mood__text">mood history</p>

        {moods && (
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
        )}
        {isMood && (
          <div className="mood__card">
            <p className="mood__card__text">
              No mood history <br /> to show yet yet
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodHistory;

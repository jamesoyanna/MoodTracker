import React from 'react';
import './mood.css';
const Mood = ({id,title, message}) => {
    return (
      <>
        <div className="mood__container">
          <div className="overlay">
            <p className="mood__content">
              <span className="mood__emoji">{title}</span>{message}
            </p>
          </div>
        </div>
      </>
    );
}
export default Mood;

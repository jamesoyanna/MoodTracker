import React from 'react';
import './mood.css';
const Mood = () => {
    return (
      <>
        <div className="mood__container">
          <div className="overlay">
            <p className="mood__content">
              <span className="mood__emoji">😃</span>Cat was super exited !
            </p>
          </div>
        </div>
      </>
    );
}
export default Mood;

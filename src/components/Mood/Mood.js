import React from 'react';
import './mood.css';
const Mood = ({title, message }) => {
  return (
    <>
      {message === "Cat was super excited!" && (
        <div className="happy__mood">
          <p className="happy__mood__content">
            <span className="happy__mood__emoji">{title}</span>
            {message}
          </p>
        </div>
      )}

      {message === "Cat wasn't having it" && (
        <div className="sad__mood">
          <p className="sad__mood__title">
            <span className="sad__mood__emoji">{title}</span>
            {message}
          </p>
        </div>
      )}

      {message === "Cat was indifferent" && (
        <div className="indifferent__mood">
          <p className="indifferent__mood__content">
            <span className="indifferent__emoji">{title}</span>
            {message}
          </p>
        </div>
      )}
    </>
  );
};
export default Mood;

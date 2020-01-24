import React from 'react';
import addIcon from '../img/plus.png';

function FontCards({ fonts, sampleText, fontSize, addToFavorites }) {
  return fonts.map((font, index) => {
    return (
      <div className="font-card" key={index}>
        <link
          rel="stylesheet"
          href="`https://fonts.googleapis.com/css?family=${font.family}`"
        ></link>

        <div className="top-of-card">
          <div className="font-family">{font.family}</div>
          <div>
            <button onClick={() => addToFavorites(font)}>
              <img className="plus-icon" src={addIcon} />
            </button>
          </div>
        </div>

        <div
          style={{ fontFamily: `${font.family}`, fontSize: `${fontSize}` }}
          className="sample-text"
        >
          {sampleText}
        </div>
      </div>
    );
  });
}

export default FontCards;

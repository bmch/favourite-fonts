import React from 'react';

function FontCards({ fonts, sampleText, fontSize }) {
  return fonts.map((font, index) => {
    return (
      <div className="font-card" key={index}>
        <link
          rel="stylesheet"
          href="`https://fonts.googleapis.com/css?family=${font.family}`"
        ></link>

        <div className="font-family">{font.family}</div>

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

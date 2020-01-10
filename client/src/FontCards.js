import React from 'react';

function FontCards({ fonts, sampleText, fontSize }) {
  return fonts.map((font, index) => {
    return (
      <div
        className="font-card"
        key={index}
        style={{ fontFamily: `${font.family}`, fontSize: `${fontSize}` }}
      >
        <link
          rel="stylesheet"
          href="`https://fonts.googleapis.com/css?family=${font.family}`"
        ></link>
        <div>
          <div>{font.family}</div>
          <div></div>
          <div className="sample-text">{sampleText}</div>
        </div>
      </div>
    );
  });
}

export default FontCards;

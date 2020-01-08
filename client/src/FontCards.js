import React from 'react';

function FontCards({ fonts }) {
  return fonts.slice(0, 15).map((font, index) => {
    return (
      <div
        className="font-card"
        key={index}
        style={{ fontFamily: `${font.family}` }}
      >
        <link
          rel="stylesheet"
          href="`https://fonts.googleapis.com/css?family=${font.family}`"
        ></link>
        <div font={font}>
          <div>{font.family}</div>
          <div></div>
          <div className="sample-text">Say something</div>
        </div>
      </div>
    );
  });
}

export default FontCards;

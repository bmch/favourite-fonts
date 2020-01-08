import React from 'react';

function FontList({ fonts }) {
  return fonts.slice(0, 15).map((font, index) => {
    return (
      <div font={font} key={index}>
        {font.family}
      </div>
    );
  });
}

export default FontList;

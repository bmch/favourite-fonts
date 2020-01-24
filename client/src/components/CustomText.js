import React from 'react';

export default function CustomText({ sampleText, handleChangeText }) {
  return (
    <div className="custom-div">
      <input
        className="custom-text-input"
        type="text"
        value={sampleText}
        onChange={handleChangeText}
        placeholder="Type something"
      />
    </div>
  );
}

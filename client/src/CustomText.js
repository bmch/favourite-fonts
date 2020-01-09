import React from 'react';

export default function CustomText({ sampleText, handleChangeText }) {
  return (
    <div>
      <input
        type="text"
        value={sampleText}
        onChange={handleChangeText}
        placeholder="search..."
      />
    </div>
  );
}

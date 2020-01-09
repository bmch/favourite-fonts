import React from 'react';

export default function Search({ handleChange, searchTerm }) {
  return (
    <label>
      <input
        type="text"
        values={searchTerm}
        onChange={handleChange}
        placeholder="search..."
      />
    </label>
  );
}

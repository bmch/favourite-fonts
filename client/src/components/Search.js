import React from 'react';

export default function Search({ handleChange, searchTerm }) {
  return (
    <div>
      <label>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search fonts"
          className="search-fonts"
        />
      </label>
    </div>
  );
}

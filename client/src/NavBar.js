import React from 'react';
import Search from './Search';

export default function NavBar({ handleChange, searchTerm }) {
  // search, custom text, font-size, dark/light mode, grid/list mode, and reset
  return (
    <div>
      <Search handleChange={handleChange} searchTerm={searchTerm} />
    </div>
  );
}

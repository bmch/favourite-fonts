import React from 'react';
import Search from './Search';
import CustomText from './CustomText';

export default function NavBar({
  handleChange,
  searchTerm,
  sampleText,
  handleChangeText
}) {
  // search, custom text, font-size, dark/light mode, grid/list mode, and reset
  return (
    <div>
      <Search handleChange={handleChange} searchTerm={searchTerm} />
      <CustomText handleChangeText={handleChangeText} sampleText={sampleText} />
    </div>
  );
}

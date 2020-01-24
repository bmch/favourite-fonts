import React from 'react';
import Search from './Search';
import CustomText from './CustomText';
import SelectFontSize from './SelectFontSize';
import Reset from './Reset';

export default function NavBar({
  handleChange,
  searchTerm,
  sampleText,
  handleChangeText,
  fontSize,
  handleChangeFontSize,
  reset
}) {
  // search, custom text, font-size, dark/light mode, grid/list mode, and reset
  return (
    <div className="nav-bar">
      <Search handleChange={handleChange} searchTerm={searchTerm} />
      <CustomText handleChangeText={handleChangeText} sampleText={sampleText} />
      <SelectFontSize
        handleChangeFontSize={handleChangeFontSize}
        fontSize={fontSize}
      />
      <Reset reset={reset} />
    </div>
  );
}

import React from 'react';
import Search from './Search';
import CustomText from './CustomText';
import SelectFontSize from './SelectFontSize';

export default function NavBar({
  handleChange,
  searchTerm,
  sampleText,
  handleChangeText,
  fontSize,
  handleChangeFontSize
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
    </div>
  );
}

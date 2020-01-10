import React from 'react';

export default function SelectFontSize({ fontSize, handleChangeFontSize }) {
  return (
    <select value={fontSize} onChange={handleChangeFontSize}>
      <option value="20px">20px</option>
      <option value="24px">24px</option>
      <option value="32px">32px</option>
      <option value="40px">40px</option>
    </select>
  );
}

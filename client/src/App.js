import React, { useState, useEffect } from 'react';
import './App.css';
import apiClient from './services/ApiClient';
import FontCards from './FontCards';
import NavBar from './NavBar';

const App = () => {
  const initialState = { originalFonts: [], displayFonts: [], searchTerm: '' };
  const [fonts, setFontList] = useState(initialState);

  const handleChange = e => {
    console.log('search term is', e.target.value);
    setFontList({
      searchTerm: e.target.value,
      originalFonts: fonts.originalFonts,
      displayFonts: filterFonts()
    });
  };

  const filterFonts = () => {
    let list = fonts.originalFonts;
    console.log('this is list', list);
    let q = fonts.searchTerm;
    console.log('this is query', q);

    return list.filter(font => {
      return font.family.toLowerCase().indexOf(q) !== -1; // returns true or false
    });
    //  setFontList({ displayFonts: list });
  };

  const updateFonts = () => {
    apiClient.getFonts().then(fonts => {
      setFontList({ originalFonts: fonts.items, displayFonts: fonts.items });
    });
  };

  useEffect(() => {
    updateFonts();
  }, []);

  return (
    <div className="container">
      <div className="header-container">
        <div className="header-left">Google Fonts </div>

        <div className="header-right">
          <div className="menu-item">CATALOG</div>
          <div className="menu-item">FEATURED</div>
          <div className="menu-item">ARTICLES</div>
          <div className="menu-item">ABOUT</div>
        </div>
      </div>

      <NavBar handleChange={handleChange} searchTerm={fonts.searchTerm} />

      <div className="card-container">
        <FontCards fonts={fonts.displayFonts} />
      </div>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import apiClient from './services/ApiClient';
import FontCards from './FontCards';
import NavBar from './NavBar';

const App = () => {
  const initialState = { originalFonts: [], displayFonts: [], searchTerm: '' };
  const [fonts, setFontList] = useState(initialState);
  const [sampleText, setSampleText] = useState('Type Something');

  const handleChange = e => {
    console.log('target value is ', e.target.value);
    setFontList(
      {
        searchTerm: e.target.value,
        originalFonts: fonts.originalFonts,
        displayFonts: fonts.displayFonts
      }
      // () => {
      //   filterFonts();
      // }
    );
  };

  const handleChangeText = e => {
    setSampleText(e.target.value);
  };

  const filterFonts = () => {
    if (!fonts.searchTerm) {
      return;
    }
    const dispFont = fonts.originalFonts.filter(font => {
      return font.family.toLowerCase().indexOf(fonts.searchTerm) !== -1; // returns true or false
    });
    setFontList({
      searchTerm: fonts.searchTerm,
      originalFonts: fonts.originalFonts,
      displayFonts: dispFont
    });
  };

  const updateFonts = () => {
    apiClient.getFonts().then(fonts => {
      setFontList({ originalFonts: fonts.items, displayFonts: fonts.items });
    });
  };

  useEffect(() => {
    updateFonts();
  }, []);

  useEffect(() => {
    filterFonts();
  }, [fonts.searchTerm]);

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

      <NavBar
        handleChange={handleChange}
        searchTerm={fonts.searchTerm || ''}
        handleChangeText={handleChangeText}
        sampleText={sampleText}
      />

      <div className="card-container">
        <FontCards fonts={fonts.displayFonts} sampleText={sampleText} />
      </div>
    </div>
  );
};

export default App;

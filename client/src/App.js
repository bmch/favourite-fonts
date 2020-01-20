import React, { useState, useEffect } from 'react';
import './App.css';
import apiClient from './services/ApiClient';
import FontCards from './FontCards';
import NavBar from './NavBar';
import ScrollToTop from './ScrollToTop';

const App = () => {
  const initialState = {
    originalFonts: [],
    displayFonts: [],
    searchTerm: '',
    favorites: []
  };
  const [fonts, setFontList] = useState(initialState);
  const [sampleText, setSampleText] = useState('Type Something');
  const [fontSize, setFontSize] = useState('32px');
  const [scrollButton, setScrollButton] = useState(false);

  const handleChange = e => {
    console.log('target value is ', e.target.value);
    setFontList({
      searchTerm: e.target.value,
      originalFonts: fonts.originalFonts,
      displayFonts: fonts.displayFonts,
      favorites: fonts.favorites
    });
  };

  const addToFavorites = font => {
    console.log(font.family);
    console.log('this is fonts.favorites', fonts);

    setFontList({
      searchTerm: fonts.searchTerm,
      originalFonts: fonts.originalFonts,
      displayFonts: fonts.displayFonts,
      favorites: fonts.favorites.concat(font)
    });
  };

  const reset = () => {
    setFontList({
      searchTerm: '',
      originalFonts: fonts.originalFonts,
      displayFonts: fonts.originalFonts,
      favorites: fonts.favorites
    });
    setSampleText('Type Something');
    setFontSize('32px');
  };

  const displayFavorites = () => {
    setFontList({
      searchTerm: fonts.searchTerm,
      originalFonts: fonts.originalFonts,
      displayFonts: fonts.favorites,
      favorites: fonts.favorites
    });
  };

  const handleChangeFontSize = e => {
    console.log('this is the target value', e.target.value);
    setFontSize(e.target.value);
  };

  const handleChangeText = e => {
    setSampleText(e.target.value);
  };

  const filterFonts = () => {
    if (!fonts.searchTerm) {
      setFontList({
        searchTerm: fonts.searchTerm,
        originalFonts: fonts.originalFonts,
        displayFonts: fonts.originalFonts
      });
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
      setFontList({
        originalFonts: fonts.items,
        displayFonts: fonts.items,
        favorites: [],
        searchTerm: ''
      });
    });
  };

  useEffect(() => {
    updateFonts();
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    // if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //   mybutton.style.display = "block";
    // } else {
    //   mybutton.style.display = "none";
    // }
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setScrollButton(true);
    } else {
      setScrollButton(false);
    }
  };

  useEffect(() => {
    filterFonts();
  }, [fonts.searchTerm]);

  return (
    <div className="container">
      <div className="header-container">
        <div className="header-left">Google Fonts </div>

        <div className="header-right">
          <div className="menu-item">
            <a href="#" onClick={displayFavorites}>
              FAVORITES!!
            </a>
          </div>
          <div className="menu-item">
            <a href="#">CATALOG</a>
          </div>
          <div className="menu-item">
            <a href="#">FEATURED</a>
          </div>
          <div className="menu-item">
            <a href="#">ARTICLES</a>
          </div>
          <div className="menu-item">
            <a href="#">ABOUT</a>
          </div>
        </div>
      </div>

      <NavBar
        handleChange={handleChange}
        searchTerm={fonts.searchTerm || ''}
        handleChangeText={handleChangeText}
        sampleText={sampleText}
        handleChangeFontSize={handleChangeFontSize}
        reset={reset}
        fontSize={fontSize}
      />

      <div className="card-container">
        <FontCards
          fonts={fonts.displayFonts}
          sampleText={sampleText}
          fontSize={fontSize}
          addToFavorites={addToFavorites}
        />
      </div>
      <div>
        <ScrollToTop scrollButton={scrollButton} />
      </div>

      <div className="footer">coded by bmch | 2020 | Pre-work Project</div>
    </div>
  );
};

export default App;

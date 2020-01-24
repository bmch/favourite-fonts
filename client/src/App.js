import React, { useState, useEffect } from 'react';
import './App.css';
import apiClient from './services/ApiClient';
import FontCards from './components/FontCards';
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';

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
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFontList({
      searchTerm: e.target.value,
      originalFonts: fonts.originalFonts,
      displayFonts: fonts.displayFonts,
      favorites: fonts.favorites
    });
  };

  const addToFavorites = font => {
    alert(font.family + ' has been added to your favorite list');
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
    setFontSize(e.target.value);
  };

  const handleChangeText = e => {
    if (!e.target.value) {
      setSampleText('Type Something');
    } else setSampleText(e.target.value);
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
    // loading true
    setLoading(true);
    apiClient.getFonts().then(fonts => {
      // loading flase
      setLoading(false);
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
              FAVS!
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
        {loading && <Loader />}
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

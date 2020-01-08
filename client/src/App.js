import React, { useState, useEffect } from 'react';
import './App.css';
import apiClient from './services/ApiClient';
import FontList from './FontList';

const App = () => {
  const [fonts, setFontList] = useState([]);

  const updateFonts = () => {
    apiClient.getFonts().then(fonts => {
      console.log('this is fonts, app.js', fonts);
      setFontList(fonts.items);
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

      <nav>Nav</nav>

      <FontList fonts={fonts} />
    </div>
  );
};

export default App;

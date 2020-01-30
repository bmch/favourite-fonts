import React from 'react';

const darkness = () => {
  document.documentElement.setAttribute('data-theme', 'dark');
};

const light = () => {
  document.documentElement.setAttribute('data-theme', 'light');
};

export default function DarkLightMode() {
  return (
    <div>
      <button className="dark-button" onClick={darkness}></button>
      <button className="light-button" onClick={light}></button>
    </div>
  );
}

import React, { useState } from 'react';
import './App.css';

function App() {
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [showHomePage, setShowHomePage] = useState(false);

  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * window.innerWidth - 100);
    const randomY = Math.floor(Math.random() * window.innerHeight - 50);
    setNoButtonStyle({
      position: 'absolute',
      left: `${randomX}px`,
      top: `${randomY}px`,
    });
  };

  const handleYesClick = () => {
    setShowHomePage(true);
  };

  return (
    <div className="App">
      {showHomePage ? (
        <div className="home-page">
          <h1>Welcome to Our Date!</h1>
          <p>Date Location = Kahi nhi jana, chup se ghr me raho😝.</p>
        </div>
      ) : (
        <>
          <h1>Will you go on a date with me?</h1>
          <button className="yes-button" onClick={handleYesClick}>Yes</button>
          <button
            className="no-button"
            style={noButtonStyle}
            onMouseEnter={moveNoButton}
          >
            No
          </button>
        </>
      )}
    </div>
  );
}

export default App;

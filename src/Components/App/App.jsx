import React, { useState } from 'react';
import MainMenu from '../Menu/MainMenu';
import Game from '../Game/Game';
import './App.css';

const App = () => {
  const [showMainMenu, setShowMainMenu] = useState(true);

  const handleButtonClick = () => {
    setShowMainMenu(false);
  };
  const handleReturnToMainMenu = () => {
    setShowMainMenu(true);
  };

  return (
    <div className='app'>
      {showMainMenu ? (
        <MainMenu onButtonClick={handleButtonClick} />
      ) : (
        <Game pauseClick={handleReturnToMainMenu} />
      )}
    </div>
  );
};

export default App;

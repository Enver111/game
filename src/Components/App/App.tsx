import React, { useState } from 'react';
import MainMenu from '../Menu/MainMenu';
import Game from '../Game/Game';
import './App.css';

const App: React.FC = () => {
  const [showMainMenu, setShowMainMenu] = useState<boolean>(true);
  const [showContinueButton, setShowContinueButton] = useState<boolean>(false);

  const handleButtonClick = () => {
    setShowMainMenu(false);
    setShowContinueButton(true);
  };

  const handleReturnToMainMenu = () => {
    setShowMainMenu(true);
  };

  return (
    <div className='app'>
      {showMainMenu ? (
        <MainMenu
          onButtonClick={handleButtonClick}
          showContinueButton={showContinueButton}
        />
      ) : (
        <Game pauseClick={handleReturnToMainMenu} />
      )}
    </div>
  );
};

export default App;

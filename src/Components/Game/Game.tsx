import React from 'react';
import Energy from './Energy/Energy';
import style from './Game.module.css';
import Money from './Money/Money';
import Pause from '../Button/Pause/Pause';
import Footer from './Footer/Footer';

interface GameProps {
  pauseClick: () => void;
}

const Game: React.FC<GameProps> = ({ pauseClick }) => {
  return (
    <div className={style.game}>
      <header className={style.header}>
        <div className={style.wrap}>
          <Energy icon={'❤️'} color={'red'} value={70} max={100} />
          <Energy icon={'⚡️'} color={'orange'} value={70} max={100} />
        </div>
        <Money value={0} />
        <Pause pauseClick={pauseClick} />
      </header>
      <main className={style.main}></main>
      <footer className={style.footer}>
        <Footer
          image1='path/to/image1.png'
          image2='path/to/image2.png'
          image3='path/to/image3.png'
        />
      </footer>
    </div>
  );
};

export default Game;

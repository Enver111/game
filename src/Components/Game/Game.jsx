import React from 'react';
import Energy from './Energy/Energy';
import style from './Game.module.css';
import Health from './Health/Health';
import Money from './Money/Money';
import Pause from '../Button/Pause/Pause';
import Footer from './Footer/Footer';

const Game = ({ pauseClick }) => {
  return (
    <div className={style.game}>
      <header className={style.header}>
        <div className={style.wrap}>
          <Health value={70} max={100} />
          <Energy value={70} max={100} />
        </div>
        <Money value={0} />
        <Pause pauseClick={pauseClick} />
      </header>

      <main className={style.main}></main>
      <footer className={style.footer}>
        <Footer />
      </footer>
    </div>
  );
};
export default Game;

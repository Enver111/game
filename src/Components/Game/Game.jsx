import React from 'react';
import Energy from './Energy/Energy';
import style from './Game.module.css';
import Health from './Health/Health';
import Money from './Money/Money';
import Pause from './icons/pause.png';
const Game = ({ pauseClick }) => {
  return (
    <div className={style.game}>
      <header className={style.header}>
        <div className={style.wrap}>
          <Health value={70} max={100} />
          <Energy value={70} max={100} />
        </div>
        <Money value={0} />
        <img
          onClick={pauseClick}
          className={style.img}
          src={Pause}
          alt='pause'
        />
      </header>

      <main className={style.main}></main>
    </div>
  );
};
export default Game;

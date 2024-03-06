import React from 'react';
import style from './MainMenu.module.css';

const MainMenu = ({ onButtonClick }) => {
  return (
    <div className={style.menu}>
      <div className={style.button}>
        <button className={style.btn} onClick={onButtonClick}>
          New Game
        </button>
      </div>
      <div className={style.button}>
        <button className={style.btn}>Settings</button>
      </div>
      <div className={style.button}>
        <button className={style.btn}>Exit</button>
      </div>
    </div>
  );
};

export default MainMenu;

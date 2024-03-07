import React, { useState } from 'react';
import style from './Pause.module.css';
import Pause1 from '../img/pause1.png';
import Pause2 from '../img/pause2.png';

const Pause = ({ pauseClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked(true);
    pauseClick();
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  };

  return (
    <div
      className={style.btn}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isClicked ? (
        <img className={style.pause} src={Pause2} alt='Изображение 2' />
      ) : isHovered ? (
        <img className={style.pause} src={Pause2} alt='Изображение 2' />
      ) : (
        <img className={style.pause} src={Pause1} alt='Изображение 1' />
      )}
    </div>
  );
};

export default Pause;

import React, { useState } from 'react';
import style from './FooterBtn.module.css';

const FooterBtn = ({ image1, image2, image3 }) => {
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
        <img className={style.footer} src={image2} alt='Изображение 2' />
      ) : isHovered ? (
        <img className={style.footer} src={image3} alt='Изображение 2' />
      ) : (
        <img className={style.footer} src={image1} alt='Изображение 1' />
      )}
    </div>
  );
};

export default FooterBtn;

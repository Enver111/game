import React from 'react';
import FooterBtn from '../../Button/FooterBtn/FooterBtn';
import Charicon1 from '../icons/charicon1.png';
import Charicon2 from '../icons/charicon2.png';
import Charicon3 from '../icons/charicon3.png';
import Map1 from '../icons/map1.png';
import Map2 from '../icons/map2.png';
import Map3 from '../icons/map3.png';
import Backpack1 from '../icons/backpack1.png';
import Backpack2 from '../icons/backpack2.png';
import Backpack3 from '../icons/backpack3.png';
import Directory1 from '../icons/directory1.png';
import Directory2 from '../icons/directory2.png';
import Directory3 from '../icons/directory3.png';
import style from './Footer.module.css';

interface FooterProps {
  image1: string;
  image2: string;
  image3: string;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={style.footer}>
      <FooterBtn image1={Charicon1} image2={Charicon2} image3={Charicon3} />
      <FooterBtn image1={Map1} image2={Map2} image3={Map3} />
      <FooterBtn image1={Backpack1} image2={Backpack3} image3={Backpack2} />
      <FooterBtn image1={Directory1} image2={Directory3} image3={Directory2} />
    </div>
  );
};

export default Footer;

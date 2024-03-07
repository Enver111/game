import style from './MainMenu.module.css';
import Button from '../Button/Button';

const MainMenu = ({ onButtonClick, showContinueButton }) => {
  const handleContinueClick = () => {
    onButtonClick();
  };

  return (
    <div className={style.menu}>
      <div className={style.button}>
        <Button onButtonClick={onButtonClick} name={'Новая игра'} />
      </div>
      {showContinueButton && (
        <div className={style.button}>
          <Button onButtonClick={handleContinueClick} name={'Продолжить'} />
        </div>
      )}
      <div className={style.button}>
        <Button name={'Настройки'} />
      </div>
      <div className={style.button}>
        <Button name={'Выход'} />
      </div>
    </div>
  );
};

export default MainMenu;

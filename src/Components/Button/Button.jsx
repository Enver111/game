import style from './Button.module.css';
export default function Button({ name, onButtonClick }) {
  return (
    <button onClick={onButtonClick} className={style.btn}>
      {name}
    </button>
  );
}

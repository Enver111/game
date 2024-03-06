import style from './Money.module.css';

export default function Money({ value }) {
  const money = value;
  return (
    <div className={style.money}>
      <div className={style.icon} value={money}>
        💶
      </div>
      <p>{money}</p>
    </div>
  );
}

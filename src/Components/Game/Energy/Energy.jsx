import React from 'react';
import style from './Energy.module.css';

export default function Energy({ value, max }) {
  const percentage = (value / max) * 100;

  return (
    <div className={style.energy}>
      <div className={style.energy_icon}>⚡</div>
      <div
        style={{
          margin: 'auto 0',
          border: '1px solid black',
          width: '100px',
          borderRadius: '15px',
          height: '10px',
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: '10px',
            backgroundColor: 'orange',
            borderRadius: '15px',
          }}
        ></div>
      </div>
    </div>
  );
}

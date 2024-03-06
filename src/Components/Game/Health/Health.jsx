import React from 'react';
import style from './Health.module.css';

export default function Health({ value, max }) {
  const percentage = (value / max) * 100;

  return (
    <div className={style.health}>
      <div className={style.health_icon}>❤️</div>
      <div
        style={{
          margin: 'auto 0',
          border: '1px solid #333',
          width: '100px',
          borderRadius: '15px',
          height: '10px',
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: '10px',
            backgroundColor: 'red',
            borderRadius: '15px',
          }}
        ></div>
      </div>
    </div>
  );
}

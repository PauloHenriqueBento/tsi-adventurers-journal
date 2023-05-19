import React from 'react';
import styles from './SealPlanCard.module.css';

const SealPlanCard = ({ type, color, classN }) => {
  return (
    <div
      className={`${styles.seal} ${type === 'gratis' ? styles.gratis : ''}  ${
        type === 'adventurer' ? styles.adventurer : ''
      } ${type === 'plus' ? styles.plus : ''} ${
        color === 'light-blue' ? styles.bgBlue : ''
      } ${classN}`}
    >
      {type === 'gratis' ? (
        <span>Grátis</span>
      ) : (
        <span>{`Adventurer ${type === 'plus' ? 'Plus' : ''}`}</span>
      )}
    </div>
  );
};

export default SealPlanCard;

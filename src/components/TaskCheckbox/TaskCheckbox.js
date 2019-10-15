import React from 'react';
import styles from './TaskCheckbox.module.css';

export default function TaskCheckbox({ clickHandler, isChecked }) {
  return (
    <button className={styles.checkbox} onClick={() => clickHandler()}>
      <span role="img" aria-label="check task" style={{ opacity: isChecked ? 1 : 0.1}}>✔</span>
    </button>
  );
}
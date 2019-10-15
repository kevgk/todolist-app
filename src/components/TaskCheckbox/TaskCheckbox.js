import React from 'react';
import styles from './TaskCheckbox.module.css';

export default function TaskCheckbox({ checkHandler, isChecked }) {
  return (
    <button className={styles.checkbox} onClick={() => checkHandler()}>
      <span role="img" aria-label="check task" style={{ opacity: isChecked ? 1 : 0.1}}>✔</span>
    </button>
  );
}
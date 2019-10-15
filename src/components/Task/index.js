import React from 'react';
import styles from './task.module.css';

export default function Task({ name, checkHandler, removeHandler, isChecked }) {
  return (
    <li className={styles.task}>
      <button className={styles.checkbox} onClick={() => checkHandler()}><span role="img" aria-label="check task" style={{ opacity: isChecked ? 1 : 0.1}}>✔</span></button>
      <span className={styles.taskname}>{name}</span>
      {isChecked && <button className={styles.removeButton} onClick={() => removeHandler()}>x</button>}
    </li>
  );
}
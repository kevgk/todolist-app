import React from 'react';
import styles from './Task.module.css';
import TaskCheckbox from '../TaskCheckbox/TaskCheckbox';

export default function Task({ name, checkHandler, removeHandler, isChecked }) {
  return (
    <li className={styles.task}>
      <TaskCheckbox styles={styles.checkbox} isChecked={isChecked} checkHandler={checkHandler}/>
      <span className={styles.taskname}>{name}</span>
      {isChecked && <button className={styles.removeButton} onClick={() => removeHandler()}>x</button>}
    </li>
  );
}
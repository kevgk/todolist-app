import React from 'react';
import styles from './Task.module.css';
import TaskCheckbox from '../TaskCheckbox/TaskCheckbox';

export default function Task({ name, clickHandler, removeHandler, isChecked }) {
  return (
    <li className={styles.task}>
      <TaskCheckbox isChecked={isChecked} clickHandler={clickHandler}/>
      <span className={styles.taskname}>{name}</span>
      {isChecked && <button className={styles.removeButton} onClick={() => removeHandler()}>x</button>}
    </li>
  );
}
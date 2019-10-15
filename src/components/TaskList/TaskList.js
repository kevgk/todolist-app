import React, { useContext } from 'react';
import Task from '../Task/Task';
import { TodoContext } from '../../store/todo';
import styles from './TaskList.module.css';

export default function TaskList({ tasks }) {

  const { dispatch } = useContext(TodoContext);

  const taskElements = tasks.map(({ id, name, isChecked }) => (
    <Task
      key={id}
      name={name}
      isChecked={isChecked}
      clickHandler={() => dispatch({ type: 'TOGGLE_TODO', payload: { id } })}
      removeHandler={() => dispatch({ type: 'REMOVE_TODO', payload: { id } })}
      />
    ));

  const Hint = <div className={styles.noTasksHint}>Let's get productive!</div>;

  return (
    <ul>
      { tasks.length > 0 ? taskElements : Hint }
    </ul>
  );
}
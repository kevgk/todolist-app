import React, { useRef, useContext } from 'react';
import { TodoContext } from '../../store/todo';
import styles from './TaskInput.module.css';

export default function TaskInput() {
  const taskInput = useRef();
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = e => {
    e.preventDefault();

    if (taskInput.current.value.length) {
      dispatch({ type: 'ADD_TODO', payload: { name: taskInput.current.value }});
      taskInput.current.value = '';
    }
  }

  return (
    <form className={styles.container} onSubmit={e => handleSubmit(e)}>
      <input className={styles.taskInput} autoFocus placeholder="Add a task..." ref={taskInput}/>
    </form>
  );
}
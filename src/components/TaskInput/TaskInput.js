import React, { useRef, useContext } from 'react';
import { TodoContext } from '../../store/todo';
import { container } from './TaskInput.module.css';

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
    <form className={container} onSubmit={e => handleSubmit(e)}>
      <input autoFocus placeholder="Add a task..." ref={taskInput}/>
    </form>
  );
}
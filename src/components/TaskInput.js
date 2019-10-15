import React, { useRef, useContext } from 'react';
import { TodoContext } from '../store/todo';

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
    <form className='taskContainer' onSubmit={e => handleSubmit(e)}>
      <input className='taskInput' autoFocus placeholder="Add a task..." ref={taskInput}/>
    </form>
  );
}
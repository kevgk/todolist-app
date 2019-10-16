import React, { useRef, useContext, useEffect } from 'react';
import { TodoContext } from '../store/todo';
import localStorageSaveJSON from '../utils/localStorageSaveJSON';
import { v4 as uuid } from 'uuid';

export default function TaskInput() {
  const taskInput = useRef();
  const { state, dispatch } = useContext(TodoContext);

  const isFirstRun = useRef(true);

  const handleSubmit = e => {
    e.preventDefault();

    if (taskInput.current.value.length) {
      dispatch({ type: 'ADD_TODO', payload: { id: uuid(), name: taskInput.current.value }});
      taskInput.current.value = '';
    }
  }

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    localStorageSaveJSON('tasks', state);
  }, [state]);

  return (
    <form className='taskContainer' onSubmit={e => handleSubmit(e)}>
      <input className='taskInput' autoFocus placeholder="Add a task..." ref={taskInput}/>
    </form>
  );
}
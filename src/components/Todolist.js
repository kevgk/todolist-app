import React, { useContext, useEffect } from 'react';
import { TodoContext } from '../store/todo';
import TaskInput from './TaskInput';
import TaskCountFeedback from './TaskCountFeedback';
import TaskList from './TaskList';

export default function Todolist() {
  const { state: tasks, dispatch } = useContext(TodoContext);

  useEffect(() => {
    if (localStorage) {
      const offlineTasks = localStorage.getItem('tasks');
      if (offlineTasks) {
        dispatch({ type: 'SET_TODOS', payload: JSON.parse(offlineTasks) });
      }
    }
  }, [dispatch]);

  const uncheckedTaskCount = tasks.length - tasks.filter(task => task.isChecked).length;

  return (
    <div className='app'>
      <TaskCountFeedback todoCount={uncheckedTaskCount}/>
      <h1>Todolist</h1>
      <TaskList tasks={tasks} dispatch={dispatch}/>      
      <TaskInput/>
    </div>
  );
}
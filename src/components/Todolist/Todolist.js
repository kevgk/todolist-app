import React, { useContext, useEffect } from 'react';
import { TodoContext } from '../../store/todo';
import TaskInput from '../TaskInput/TaskInput';
import TaskCountFeedback from '../TaskCountFeedback/TaskCountFeedback';
import TaskList from '../TaskList/TaskList';
import styles from './Todolist.module.css';

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
    <div className={styles.app}>
      <TaskCountFeedback todoCount={uncheckedTaskCount}/>
      <h1>Todolist</h1>
      <TaskList tasks={tasks} dispatch={dispatch}/>      
      <TaskInput/>
    </div>
  );
}
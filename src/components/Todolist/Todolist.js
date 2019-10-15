import React, { useContext, useEffect } from 'react';
import Task from '../Task/Task';
import { TodoContext } from '../../store/todo';
import TaskInput from '../TaskInput/TaskInput';
import TaskCountFeedback from '../TaskCountFeedback/TaskCountFeedback';
import styles from './Todolist.module.css';

export default function Todolist() {
  const { state: todos, dispatch } = useContext(TodoContext);

  useEffect(() => {
    if (localStorage) {
      const offlineTasks = localStorage.getItem('tasks');
      if (offlineTasks) {
        dispatch({ type: 'SET_TODOS', payload: JSON.parse(offlineTasks) })
      }
    }
  }, [dispatch]);

  const tasks = todos.map(({ id, name, isChecked }) => (
    <Task
    key={id}
    name={name}
    isChecked={isChecked}
    checkHandler={() => dispatch({ type: 'TOGGLE_TODO', payload: { id } })}
    removeHandler={() => dispatch({ type: 'REMOVE_TODO', payload: { id } })}
    />
    ));

    const TaskList = <ul>{tasks}</ul>;
    const Hint = <div className={styles.noTasksHint}>Let's get productive!</div>;
    const uncheckedTaskCount = todos.length - todos.filter(todo => todo.isChecked).length;
    
  return (
    <div className={styles.app}>
      <TaskCountFeedback todoCount={uncheckedTaskCount}/>
      <h1>Todolist</h1>
      { tasks.length > 0 ? TaskList : Hint }
      <TaskInput/>
    </div>
  );
}
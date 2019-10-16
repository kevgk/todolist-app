import React, { useContext } from 'react';
import Task from './Task';
import { TodoContext } from '../store/todo';

export default function TaskList({ tasks }) {
  const { dispatch } = useContext(TodoContext);

  const taskElements = tasks.map(({ id, name, isChecked }) => (
    <Task
      key={id}
      name={name}
      isChecked={isChecked}
      clickHandler={() => dispatch({ type: 'TOGGLE_TASK', payload: { id } })}
      removeHandler={() => dispatch({ type: 'REMOVE_TASK', payload: { id } })}
      />
    ));

  const Hint = <div className='noTasksHint'>Let's get productive!</div>;

  return (
    <ul>
      { tasks.length > 0 ? taskElements : Hint }
    </ul>
  );
}
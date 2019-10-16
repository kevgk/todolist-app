import React, { useRef, useContext } from 'react';
import { TodoContext } from '../store/todo';
import { addTask } from '../store/todo/actions';

export default function TaskInput() {
	const taskInput = useRef();
	const { dispatch } = useContext(TodoContext);

	const handleSubmit = e => {
		e.preventDefault();

		if (taskInput.current.value.length) {
			addTask(dispatch, taskInput.current.value);
			taskInput.current.value = '';
		}
	};

	return (
		<form className='taskContainer' onSubmit={e => handleSubmit(e)}>
			<input
				className='taskInput'
				autoFocus
				placeholder='Add a task...'
				ref={taskInput}
			/>
		</form>
	);
}

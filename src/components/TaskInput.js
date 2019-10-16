import React, { useRef } from 'react';
import { addTask } from '../store/actions';

export default function TaskInput({ dispatch }) {
	const taskInput = useRef();

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

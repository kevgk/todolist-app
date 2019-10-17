import React, { useReducer, useEffect } from 'react';
import { reducer } from '../store/reducer';
import TaskInput from './TaskInput';
import TaskCountFeedback from './TaskCountFeedback';
import TaskList from './TaskList';
import localStorageSaveJSON from '../utils/localStorageSaveJSON';
import { getTasksFromLocalStorage } from '../store/actions';
import useSkipFirstRender from '../utils/useSkipFirstRender';

export default function Todolist() {
	const [tasks, dispatch] = useReducer(reducer, []);

	useEffect(() => {
		getTasksFromLocalStorage(dispatch);
	}, [dispatch]);

	useSkipFirstRender(() => {
		localStorageSaveJSON('tasks', tasks);
	}, [tasks]);

	return (
		<div className='app'>
			<TaskCountFeedback tasks={tasks} />
			<h1>Todolist</h1>
			<TaskList tasks={tasks} dispatch={dispatch} />
			<TaskInput dispatch={dispatch} />
		</div>
	);
}

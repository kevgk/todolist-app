import React, { useContext, useEffect, useRef } from 'react';
import { TodoContext } from '../store/todo';
import TaskInput from './TaskInput';
import TaskCountFeedback from './TaskCountFeedback';
import TaskList from './TaskList';
import localStorageSaveJSON from '../utils/localStorageSaveJSON';
import { getTasksFromLocalStorage } from '../store/todo/actions';

export default function Todolist() {
	const { state: tasks, dispatch } = useContext(TodoContext);
	const isFirstRun = useRef(true);

	useEffect(() => {
		getTasksFromLocalStorage(dispatch);
	}, [dispatch]);

	useEffect(() => {
		if (isFirstRun.current) {
			isFirstRun.current = false;
			return;
		}
		localStorageSaveJSON('tasks', tasks);
	}, [tasks]);

	const uncheckedTaskCount =
		tasks.length - tasks.filter(task => task.isChecked).length;

	return (
		<div className='app'>
			<TaskCountFeedback todoCount={uncheckedTaskCount} />
			<h1>Todolist</h1>
			<TaskList tasks={tasks} dispatch={dispatch} />
			<TaskInput />
		</div>
	);
}

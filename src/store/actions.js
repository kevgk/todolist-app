import { v4 as uuid } from 'uuid';

export function getTasksFromLocalStorage(dispatch) {
	if (localStorage) {
		const offlineTasks = localStorage.getItem('tasks');
		if (offlineTasks) {
			dispatch({ type: 'SET_TASKS', payload: JSON.parse(offlineTasks) });
		}
	}
}

export function addTask(dispatch, name) {
	dispatch({
		type: 'ADD_TASK',
		payload: {
			id: uuid(),
			name
		}
	});
}

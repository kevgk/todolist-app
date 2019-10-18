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

export function toggleTask(dispatch, id) {
	dispatch({ type: 'TOGGLE_TASK', payload: { id } });
}

export function removeTask(dispatch, id) {
	dispatch({ type: 'REMOVE_TASK', payload: { id } });
}

export function renameTask(dispatch, id, newName) {
	dispatch({
		type: 'RENAME_TASK',
		payload: { id, newName }
	});
}

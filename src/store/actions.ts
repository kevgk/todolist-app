import { v4 as uuid } from 'uuid';

export function getTasksFromLocalStorage(dispatch: (action: object) => void) {
	if (localStorage) {
		const offlineTasks = localStorage.getItem('tasks');
		if (offlineTasks) {
			dispatch({ type: 'SET_TASKS', payload: JSON.parse(offlineTasks) });
		}
	}
}

export function addTask(dispatch: (action: object) => void, name: string) {
	dispatch({
		type: 'ADD_TASK',
		payload: {
			id: uuid(),
			name
		}
	});
}

export function toggleTask(dispatch: (action: object) => void, id: number) {
	dispatch({ type: 'TOGGLE_TASK', payload: { id } });
}

export function removeTask(dispatch: (action: object) => void, id: number) {
	dispatch({ type: 'REMOVE_TASK', payload: { id } });
}

export function renameTask(
	dispatch: (action: object) => void,
	id: number,
	newName: string
) {
	dispatch({
		type: 'RENAME_TASK',
		payload: { id, newName }
	});
}

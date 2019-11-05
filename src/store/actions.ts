import { v4 as uuid } from 'uuid';

type Dispatch = (action: object) => void;

export function getTasksFromLocalStorage(dispatch: Dispatch) {
	if (localStorage) {
		const offlineTasks = localStorage.getItem('tasks');
		if (offlineTasks) {
			dispatch({
				type: 'SET_TASKS',
				payload: JSON.parse(offlineTasks)
			});
		}
	}
}

export function addTask(dispatch: Dispatch, name: string) {
	dispatch({
		type: 'ADD_TASK',
		payload: {
			id: uuid(),
			name
		}
	});
}

export function toggleTask(dispatch: Dispatch, id: number) {
	dispatch({ type: 'TOGGLE_TASK', payload: { id } });
}

export function removeTask(dispatch: Dispatch, id: number) {
	dispatch({ type: 'REMOVE_TASK', payload: { id } });
}

export function renameTask(dispatch: Dispatch, id: number, newName: string) {
	dispatch({
		type: 'RENAME_TASK',
		payload: { id, newName }
	});
}

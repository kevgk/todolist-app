import { reducer } from './reducer';
import { v4 as uuid } from 'uuid';

let mockState;

beforeEach(() => {
	mockState = [
		{ id: uuid(), name: 'mock task 1', isChecked: false },
		{ id: uuid(), name: 'mock task 2', isChecked: true },
		{ id: uuid(), name: 'mock task 3', isChecked: false }
	];
});

describe('ADD_TASK', () => {
	it('Add one task to empty state', () => {
		const name = 'test task';
		const id = uuid();
		const reduced = reducer([], { type: 'ADD_TASK', payload: { id, name } });

		expect(reduced).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					id: expect.any(String),
					name,
					isChecked: false
				})
			])
		);
	});

	it('Add one task to populated state', () => {
		const name = 'test task';
		const reduced = reducer(mockState, {
			type: 'ADD_TASK',
			payload: { id: uuid(), name }
		});

		expect(reduced).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					id: expect.any(String),
					name,
					isChecked: false
				})
			])
		);
	});
});

describe('REMOVE_TASK', () => {
	it('Handle remove for nonexistent id on empty state', () => {
		const reduced = reducer([], {
			type: 'REMOVE_TASK',
			payload: { id: uuid() }
		});

		expect(reduced).toEqual([]);
	});

	it('Handle remove for nonexistent id on populated state', () => {
		const reduced = reducer(mockState, {
			type: 'REMOVE_TASK',
			payload: { id: uuid() }
		});

		expect(reduced).toEqual(mockState);
	});

	it('Remove task', () => {
		const idToRemove = uuid();
		mockState.push({ id: idToRemove, name: 'test task 2', isChecked: true });

		const reduced = reducer(mockState, {
			type: ' REMOVE_TASK',
			payload: { id: idToRemove }
		});

		expect(reduced).not.toContainEqual({ id: idToRemove });
	});
});

describe('TOGGLE_TASK', () => {
	it('changes state from false to true', () => {
		const idToToggle = uuid();
		mockState.push({ id: idToToggle, name: 'test task 2', isChecked: false });

		const reduced = reducer(mockState, {
			type: 'TOGGLE_TASK',
			payload: { id: idToToggle }
		});

		expect(reduced[mockState.length - 1].isChecked).toBe(true);
	});

	it('changes state from true to false', () => {
		const idToToggle = uuid();
		mockState.push({ id: idToToggle, name: 'test task 2', isChecked: true });

		const reduced = reducer(mockState, {
			type: 'TOGGLE_TASK',
			payload: { id: idToToggle }
		});

		expect(reduced[mockState.length - 1].isChecked).toBe(false);
	});
});

describe('SET_TODO', () => {
	it('Sets todos to array, containing one object', () => {
		const payload = [{ id: 0, name: 'test task' }];
		const reduced = reducer(mockState, { type: 'SET_TASKS', payload });

		expect(reduced).toEqual(payload);
	});

	it('Sets todos to array, containing multiple objects', () => {
		const payload = [
			{ id: uuid(), name: 'test task 1' },
			{ id: uuid(), name: 'test task 2' },
			{ id: uuid(), name: 'test task 3' }
		];

		const reduced = reducer(mockState, { type: 'SET_TASKS', payload });

		expect(reduced).toEqual(payload);
	});

	it('Set todos to empty array', () => {
		const reduced = reducer(mockState, {
			type: 'SET_TASKS',
			payload: []
		});

		expect(reduced).toEqual([]);
	});
});

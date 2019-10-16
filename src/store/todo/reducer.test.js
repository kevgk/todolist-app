import { reducer } from './reducer';

describe('SET_TODO', () => {
  it('Sets todos to array, containing one object', () => {
    const payload = [{ id: 0, name: "test task"}];
    const reduced = reducer([], { type: 'SET_TODOS', payload });

    expect(reduced).toEqual(payload);
  });

  it('Sets todos to array, containing multiple objects', () => {
    const payload = [
      { id: 0, name: "test task 1"},
      { id: 1, name: "test task 2"},
      { id: 2, name: "test task 3"}
    ];

    const reduced = reducer([], { type: 'SET_TODOS', payload });

    expect(reduced).toEqual(payload);
  });

  it('Set todos to empty array', () => {
    const reduced = reducer([], {
      type: 'SET_TODOS', payload: []
    });

    expect(reduced).toEqual([]);
  });
});

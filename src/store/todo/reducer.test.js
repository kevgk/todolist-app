import { reducer } from './reducer';
import { v4 as uuid } from 'uuid';

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

describe('ADD_TODO', () => {
  it('Add one task to empty state', () => {
    const name = "test task";
    const id = uuid();
    const reduced = reducer([], { type: 'ADD_TODO', payload: { id, name } });

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
    const populatedState = [
      { id: '0', name: 'test task 1', isChecked: false },
      { id: '1', name: 'test task 2', isChecked: true },
      { id: '2', name: 'test task 3', isChecked: false },
    ];

    const name = "test task";
    const reduced = reducer(populatedState, { type: 'ADD_TODO', payload: { id: uuid(), name } });

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

describe('REMOVE_TODO', () => {
  it('Handle remove for nonexistent id on empty state', () => {
    const reduced = reducer([], { type: 'REMOVE_TODO', payload: { id: '5' } });
    
    expect(reduced).toEqual([]);
  });

  it('Handle remove for nonexistent id on populated state', () => {
    const populatedState = [
      { id: uuid(), name: 'test task 1', isChecked: false },
      { id: uuid(), name: 'test task 2', isChecked: false },
    ];

    const reduced = reducer(populatedState, { type: 'REMOVE_TODO', payload: { id: uuid() } });
    
    expect(reduced).toEqual(populatedState);
  });

  it('Remove task', () => {
    const idToRemove = uuid();
    const populatedState = [
      { id: uuid(), name: 'test task 1', isChecked: false },
      { id: idToRemove, name: 'test task 2', isChecked: true },
      { id: uuid(), name: 'test task 3', isChecked: false },
    ];
    
    const reduced = reducer(populatedState, { type: ' REMOVE_TODO', payload: { id: idToRemove } });

    expect(reduced).not.toContainEqual({id: idToRemove});
  });
});

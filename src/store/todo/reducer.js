import { v4 as uuid } from 'uuid';
import localStorageSaveJSON from '../../utils/localStorageSaveJSON';

export const reducer = (state, { type, payload }) => {
  switch(type) {
    case 'ADD_TODO': {
      const newState = [
        ...state, {
          id: uuid(),
          name: payload.name,
          isChecked: false
        }
      ];
      localStorageSaveJSON('tasks', newState);
      return newState;
    }
    case 'REMOVE_TODO': {
      const newState = state.filter(todo => todo.id !== payload.id);
      localStorageSaveJSON('tasks', newState);
      return newState;
    }
    case 'TOGGLE_TODO': {
      const index = state.findIndex(todo => todo.id === payload.id);
      const newState = [...state];
      newState[index].isChecked = !state[index].isChecked;
      localStorageSaveJSON('tasks', newState);
      return newState;
    }
    case 'SET_TODOS':
        return payload;
    default: return state;
  }
}
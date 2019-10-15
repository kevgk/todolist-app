import { v4 as uuid } from 'uuid';
import localStorageSaveJSON from '../../utils/localStorageSaveJSON';

export const setTodos = todos => todos;

export const addTodo = (state, name) => {
  const newState = [...state, { id: uuid(), name, isChecked: false }];
  localStorageSaveJSON('tasks', newState);
  return newState;
}

export const removeTodo = (state, idToRemove) => {
  const newState = state.filter(todo => todo.id !== idToRemove)
  localStorageSaveJSON('tasks', newState);
  return newState;
}

export const toggleTodo = (state, idToCheck) => {
  const index = state.findIndex(todo => todo.id === idToCheck);
  const newState = [...state];
  newState[index].isChecked = !state[index].isChecked;
  localStorageSaveJSON('tasks', newState);
  return newState;
}
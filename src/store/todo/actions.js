import { v4 as uuid } from 'uuid';

function updateLocalStorage(state) {
  localStorage.setItem('tasks', JSON.stringify(state));
}

export const setTodos = todos => todos;

export const addTodo = (state, name) => {
  const newState = [...state, { id: uuid(), name, isChecked: false }];
  updateLocalStorage(newState);
  return newState;
}

export const removeTodo = (state, idToRemove) => {
  const newState = state.filter(todo => todo.id !== idToRemove)
  updateLocalStorage(newState);
  return newState;
}

export const toggleTodo = (state, idToCheck) => {
  const index = state.findIndex(todo => todo.id === idToCheck);
  const newState = [...state];
  newState[index].isChecked = !state[index].isChecked;
  updateLocalStorage(newState);
  return newState;
}
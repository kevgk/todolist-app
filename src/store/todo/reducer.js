import { addTodo, removeTodo, toggleTodo, setTodos } from './index';

export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return addTodo(state, action.payload.name);
    case 'REMOVE_TODO':
      return removeTodo(state, action.payload.id);
    case 'TOGGLE_TODO':
      return toggleTodo(state, action.payload.id);
    case 'SET_TODOS':
        return setTodos(action.payload);
    default: return state;
  }
}
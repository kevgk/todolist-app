export const reducer = (state, { type, payload }) => {
  switch(type) {
    case 'ADD_TASK': {
      return [
        ...state, {
          id: payload.id,
          name: payload.name,
          isChecked: false
        }
      ];
    }
    case 'REMOVE_TASK': {
      return state.filter(todo => todo.id !== payload.id);
    }
    case 'TOGGLE_TASK': {
      const index = state.findIndex(todo => todo.id === payload.id);
      const newState = [...state];
      newState[index].isChecked = !state[index].isChecked;
      return newState;
    }
    case 'SET_TASKS':
        return payload;
    default: return state;
  }
}
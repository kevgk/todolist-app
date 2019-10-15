import React, { createContext, useReducer } from 'react';
import { reducer, initialState } from './index';

export const TodoContext = createContext({});

export function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const providerValue = { state, dispatch};

  return (
    <TodoContext.Provider value={providerValue}>
      {children}
    </TodoContext.Provider>
  );
}
import React, { createContext, useReducer } from 'react';
import { reducer } from './index';

export const TodoContext = createContext({});

export function Provider({ children }) {
	const [state, dispatch] = useReducer(reducer, []);

	const providerValue = { state, dispatch };

	return (
		<TodoContext.Provider value={providerValue}>
			{children}
		</TodoContext.Provider>
	);
}

import React from 'react';
import Todolist from '../Todolist/Todolist';
import { Provider } from '../../store/todo/context';

export default function App() {
  return (
    <Provider>
      <Todolist/>
    </Provider>
  );
}
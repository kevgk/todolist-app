import React from 'react';

export default function TaskCheckbox({ clickHandler, isChecked }) {
  return (
    <button className='checkbox' onClick={() => clickHandler()}>
      <span role="img" aria-label="check task" style={{ opacity: isChecked ? 1 : 0.1}}>✔</span>
    </button>
  );
}
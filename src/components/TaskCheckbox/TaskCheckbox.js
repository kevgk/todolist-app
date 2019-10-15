import React from 'react';

export default function TaskCheckbox({ checkHandler, isChecked, styles }) {
  return (
    <button className={styles} onClick={() => checkHandler()}>
      <span role="img" aria-label="check task" style={{ opacity: isChecked ? 1 : 0.1}}>✔</span>
    </button>
  );
}
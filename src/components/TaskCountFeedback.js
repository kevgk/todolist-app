import React from 'react';

export default function TaskCountFeedback({todoCount = 0}) {
  return (
    <div className='container'>
      <span role="img" aria-label="Todo count feedback">{todoCount === 0 ? '😻' : '🙀'}</span>
    </div>
  );
}
import React from 'react';
import styles from './TaskCountFeedback.module.css';

export default function TaskCountFeedback({todoCount = 0}) {
  return (
    <div className={styles.container}>
      <span role="img" aria-label="Todo count feedback">{todoCount === 0 ? '😻' : '🙀'}</span>
    </div>
  );
}
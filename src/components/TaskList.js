import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

TaskList.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default function TaskList({ tasks, dispatch }) {
	const taskElements = tasks.map(({ id, name, isChecked }) => (
		<Task
			key={id}
			name={name}
			isChecked={isChecked}
			clickHandler={() => dispatch({ type: 'TOGGLE_TASK', payload: { id } })}
			removeHandler={() => dispatch({ type: 'REMOVE_TASK', payload: { id } })}
		/>
	));

	const Hint = <div className='noTasksHint'>Let's get productive!</div>;

	return <ul>{tasks.length > 0 ? taskElements : Hint}</ul>;
}

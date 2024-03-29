import React from 'react';
import Task from './Task';
import { toggleTask, removeTask, renameTask } from '../store/actions';
import PropTypes from 'prop-types';

TaskList.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
	dispatch: PropTypes.func.isRequired
};

export default function TaskList({ tasks, dispatch }) {
	const taskElements = tasks.map(({ id, name, isChecked }) => (
		<Task
			key={id}
			name={name}
			isChecked={isChecked}
			clickHandler={() => toggleTask(dispatch, id)}
			removeHandler={() => removeTask(dispatch, id)}
			renameHandler={newName => renameTask(dispatch, id, newName)}
		/>
	));

	const Hint = <div className='noTasksHint'>Let's get productive!</div>;

	return <ul>{tasks.length > 0 ? taskElements : Hint}</ul>;
}

import React from 'react';
import TaskCheckbox from './TaskCheckbox';
import TaskName from './TaskName';
import PropTypes from 'prop-types';

Task.propTypes = {
	name: PropTypes.string.isRequired,
	clickHandler: PropTypes.func.isRequired,
	removeHandler: PropTypes.func.isRequired,
	renameHandler: PropTypes.func.isRequired,
	isChecked: PropTypes.bool.isRequired
};

export default function Task({
	name,
	clickHandler,
	removeHandler,
	renameHandler,
	isChecked
}) {
	return (
		<li className='task'>
			<TaskCheckbox isChecked={isChecked} clickHandler={clickHandler} />
			<TaskName name={name} renameHandler={renameHandler} />
			{isChecked && (
				<button className='removeButton' onClick={removeHandler}>
					x
				</button>
			)}
		</li>
	);
}

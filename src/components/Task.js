import React, { memo } from 'react';
import TaskCheckbox from './TaskCheckbox';
import PropTypes from 'prop-types';

Task.propTypes = {
	name: PropTypes.string.isRequired,
	clickHandler: PropTypes.func.isRequired,
	removeHandler: PropTypes.func.isRequired,
	isChecked: PropTypes.bool.isRequired
};

function Task({ name, clickHandler, removeHandler, isChecked }) {
	return (
		<li className='task'>
			<TaskCheckbox isChecked={isChecked} clickHandler={clickHandler} />
			<span className='taskname'>{name}</span>
			{isChecked && (
				<button className='removeButton' onClick={() => removeHandler()}>
					x
				</button>
			)}
		</li>
	);
}

export default memo(Task);

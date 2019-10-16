import React from 'react';
import TaskCheckbox from './TaskCheckbox';

export default function Task({ name, clickHandler, removeHandler, isChecked }) {
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

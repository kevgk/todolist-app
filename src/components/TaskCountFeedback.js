import React from 'react';
import PropTypes from 'prop-types';

TaskCountFeedback.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default function TaskCountFeedback({ tasks }) {
	const uncheckedTaskCount =
		tasks.length - tasks.filter(task => task.isChecked).length;

	return (
		<div className='container'>
			<span role='img' aria-label='Todo count feedback'>
				{uncheckedTaskCount === 0 ? '😻' : '🙀'}
			</span>
		</div>
	);
}

import React from 'react';
import PropTypes from 'prop-types';

TaskCountFeedback.propTypes = {
	todoCount: PropTypes.number.isRequired
};

export default function TaskCountFeedback({ todoCount = 0 }) {
	return (
		<div className='container'>
			<span role='img' aria-label='Todo count feedback'>
				{todoCount === 0 ? '😻' : '🙀'}
			</span>
		</div>
	);
}

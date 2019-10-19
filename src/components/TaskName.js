import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

TaskName.propTypes = {
	name: PropTypes.string.isRequired,
	renameHandler: PropTypes.func.isRequired
};

export default function TaskName({ name, renameHandler }) {
	const [editMode, setEditMode] = useState(false);
	const inputRef = useRef();

	const onSave = e => {
		setEditMode(false);
		renameHandler(inputRef.current.value);
	};

	const onAbort = e => {
		inputRef.current.value = name;
		setEditMode(false);
	};

	const onEdit = () => {
		setEditMode(true);
	};

	const onKeyUp = e => {
		if (e.keyCode === 13) onSave();
		else if (e.keyCode === 27) onAbort();
	};

	return (
		<div className='taskname'>
			{editMode ? (
				<form onSubmit={onSave}>
					<input
						autoFocus
						ref={inputRef}
						defaultValue={name}
						onKeyUp={onKeyUp}
						onBlur={onAbort}
					/>
					<div onClick={onAbort}>cancel</div>
				</form>
			) : (
				<div className='name' onClick={onEdit}>
					{name}
				</div>
			)}
		</div>
	);
}

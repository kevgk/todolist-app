import React, { useRef, useState } from 'react';

export default function TaskName({ name, renameHandler }) {
	const [editMode, setEditMode] = useState(false);
	const inputRef = useRef();

	const onSave = () => {
		setEditMode(false);
		renameHandler(inputRef.current.value);
	};

	const onAbort = e => {
		if (e.keyCode === 27) {
			setEditMode(false);
			inputRef.current.value = name;
		}
	};

	const onEdit = () => {
		setEditMode(true);
	};

	return (
		<div className='taskname' onClick={onEdit}>
			{editMode ? (
				<form onSubmit={onSave}>
					<input
						autoFocus
						ref={inputRef}
						defaultValue={name}
						onKeyUp={onAbort}
						onBlur={onSave}
					/>
				</form>
			) : (
				<span>{name}</span>
			)}
		</div>
	);
}

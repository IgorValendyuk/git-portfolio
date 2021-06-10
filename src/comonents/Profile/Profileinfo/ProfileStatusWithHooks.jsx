import React, { useEffect, useState } from 'react';
import './ProfileStatus.scss'



const ProfileStatusWithHooks = (props) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

	const activateEditMode = () => {
		setEditMode(true);
	}
	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	}

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	}

	return (
		<div>
			{!editMode &&
				<div>
					<span
						onClick={activateEditMode}
						className='status'
					>{props.status || <span className='ChangeStatus'>change status</span>}</span>
				</div>}
			{editMode &&

				<div>
					<input
						onChange={onStatusChange}
						onBlur={deactivateEditMode}
						autoFocus
						value={status} />
				</div>
			}
		</div >
	)
}

export default ProfileStatusWithHooks;
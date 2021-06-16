import React, { useState } from 'react';
import './Profileinfo.scss';
import Avatar from './img/avatar.jpg';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataFormRedux from './ProfileDataForm';


function Profileinfo(props) {

	let [editMode, setEditMode] = useState(false);

	if (!props.profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			props.savePhoto(e.target.files[0]);
		}
	}

	const onSubmit = (formData) => {
		props.saveProfile(formData);
		setEditMode(false);
	}

	return (
		<div className="Profileinfo">
			<div className='avatar'>
				<img src={props.profile.photos.large || Avatar} alt="avatar" />
				<div>
					{props.isOwner && <input type='file' onChange={onMainPhotoSelected} />}
				</div>
			</div>
			<div className="description">
				<ProfileStatusWithHooks
					updateStatus={props.updateStatus}
					status={props.status} />
				{editMode
					? <ProfileDataFormRedux initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
					: <ProfileData isOwner={props.isOwner} profile={props.profile} goToEditMode={() => { setEditMode(true) }} />}
			</div>
		</div>
	)
}


const ProfileData = ({ profile, isOwner, goToEditMode }) => {
	return <>
		<div>
			<b>Full name:</b> {profile.fullName}
		</div>
		<div>
			<b>Looking for job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
		</div>
		{profile.lookingForAJob &&
			<div>
				<b>My professional skills:</b> {profile.lookingForAJobDescription}
			</div>
		}
		<div>
			<b>About me:</b> {profile.aboutMe}
		</div>
		<div>
			<b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
				return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
			})}
		</div>
		<div className='edit'>
			{isOwner && <button onClick={goToEditMode}>Edit</button>}
		</div>

	</>
}

const Contact = ({ contactTitle, contactValue }) => {
	return <div>
		<b>{contactTitle}</b>: {contactValue}
	</div>
}

export default Profileinfo;
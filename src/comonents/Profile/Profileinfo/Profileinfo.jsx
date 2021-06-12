import React from 'react';
import './Profileinfo.scss';
import Avatar from './img/avatar.jpg';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


function Profileinfo(props) {
	if (!props.profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			props.savePhoto(e.target.files[0]);
		}
	}

	return (
		<div className="Profileinfo">
			<div className='avatar'>
				<img src={props.profile.photos.large || Avatar} alt="avatar" />
				{props.isOwner && <input type='file' onChange={onMainPhotoSelected} />}
			</div>
			<div className="description">
				<ProfileStatusWithHooks
					updateStatus={props.updateStatus}
					status={props.status} /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quo velit consectetur vitae ratione laudantium incidunt totam? Distinctio sint laborum a aspernatur beatae? Ducimus commodi assumenda repudiandae sint harum minima.
			</div>
		</div>
	)
}

export default Profileinfo;
import React from 'react';
import './Profile.scss';
import Profileinfo from './Profileinfo/Profileinfo'
import MyPostsContainer from './MyPosts/MyPostsContainer';


function Profile(props) {

	return (
		<div className="Profile">
			<Profileinfo
				savePhoto={props.savePhoto}
				isOwner={props.isOwner}
				profile={props.profile}
				status={props.status}
				updateStatus={props.updateStatus}
			/>
			<MyPostsContainer store={props.store} />
		</div>

	)
}

export default Profile;
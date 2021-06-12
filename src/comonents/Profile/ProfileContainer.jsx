import React from 'react';
import './Profile.scss';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';



class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId;
			if (!userId) {
				this.props.history.push('/login');
			}
		}

		this.props.getUserProfile(userId)
		this.props.getStatus(userId)
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			let userId = this.props.match.params.userId;
			if (!userId) {
				userId = this.props.authorizedUserId;
				if (!userId) {
					this.props.history.push('/login');
				}
			}

			this.props.getUserProfile(userId)
			this.props.getStatus(userId)
		}
	}


	render() {
		return (
			<Profile {...this.props}
				isOwner={!this.props.match.params.userId}
				profile={this.props.profile}
				status={this.props.status}
				updateStatus={this.props.updateStatus}
				savePhoto={this.props.savePhoto}
			/>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authorizedUserId: state.auth.userId,
		isAuth: state.auth.isAuth,
	}
}


export default compose(
	connect(mapStateToProps, { getUserProfile: getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
	withRouter,
	//withAuthRedirect
)(ProfileContainer);

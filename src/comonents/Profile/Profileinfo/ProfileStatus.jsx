import React from 'react';
import './ProfileStatus.scss'



class ProfileStatus extends React.Component {

	state = {
		editMode: false,
		status: this.props.status,
	}

	activateEditMode() {

		this.setState({
			editMode: true
		})
	}

	deactivateEditMode() {
		this.setState({
			editMode: false,
			status: this.props.status,
		});
		this.props.updateStatus(this.state.status);
	}
	onStatusChange = (e) => {
		this.setState({ status: e.currentTarget.value });
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({ status: this.props.status });
		}
	}

	render() {
		return (
			<div>
				{!this.state.editMode &&
					<div>
						<span className='status'
							onClick={this.activateEditMode.bind(this)}>{this.props.status || <span>Change status</span>}</span>
					</div>}
				{
					this.state.editMode &&
					<div>
						<input onChange={this.onStatusChange}
							autoFocus onBlur={this.deactivateEditMode.bind(this)}
							value={this.state.status} />
					</div>
				}
			</div >
		)
	}
}

export default ProfileStatus;
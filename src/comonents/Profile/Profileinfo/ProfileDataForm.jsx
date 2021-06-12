import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/FormsControls/FormsControls';

const ProfileDataForm = ({ handleSubmit, profile }) => {
	return <form onSubmit={handleSubmit}>
		<button>save</button>
		<div>
			<b>Full name:</b> <Field placeholder='Full name' name={'fullName'} component={Input}
				validate={[]} />
		</div>
		<div>
			<b>Looking for job:</b> <Field name={'lookingForAJob'} component={Input} type='checkbox' />
		</div>
		<div>
			<b>My professional skills:</b> <Field placeholder='My professional skills' name={'lookingForAJobDescription'} component={Textarea} />
		</div>
		<div>
			<b>About me:</b> <Field placeholder='About me' name={'aboutMe'} component={Textarea} />
		</div>
		{/*<div>
			<b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
				return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
			})}
		</div>*/}
	</form>
}

const ProfileDataFormRedux = reduxForm({
	// a unique name for the form
	form: 'edi-profile'
})(ProfileDataForm)

export default ProfileDataFormRedux;
import React from 'react';
import { Field } from 'redux-form';
import { maxLength, required } from '../../../utils/validadors';
import { Textarea } from '../../common/FormsControls/FormsControls';
import './MyPosts.scss';


const maxLength15 = maxLength(15);

const AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field name='newPostText' component={Textarea}
				validate={[required, maxLength15]} />
			<button> Add post </button>
		</form>
	)
}

export default AddNewPostForm;
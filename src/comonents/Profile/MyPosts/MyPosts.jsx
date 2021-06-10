import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../../utils/validadors';
import { Textarea } from '../../common/FormsControls/FormsControls';
import './MyPosts.scss';
import Post from './Post/Post'

class MyPosts extends React.Component {
	render() {
		console.log('render yo')
		let postsElements =
			this.props.postData.map((post) => <Post message={post.message} likesCount={post.likesCount} key={post.id} />)

		let onAddPost = (values) => {
			this.props.addPost(values.newPostText);
		}
		return (
			<div className="MyPosts">
				<h3>MyPosts</h3>
				<AddNewPostRedux onSubmit={onAddPost} />
				<div>
					{postsElements}
				</div>
			</div >
		)
	}
}

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

const AddNewPostRedux = reduxForm({
	// a unique name for the form
	form: 'PeofileAddNewPostForm'
})(AddNewPostForm)

export default MyPosts;
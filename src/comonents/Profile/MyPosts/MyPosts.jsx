import React from 'react';
import { reduxForm } from 'redux-form';
import AddNewPostForm from './AddNewPostForm';
import './MyPosts.scss';
import Post from './Post/Post'

class MyPosts extends React.Component {
	render() {

		let postsElements =
			this.props.postData.map((post) => <Post message={post.message} likesCount={post.likesCount} key={post.id} />)

		let onAddPost = (values) => {
			this.props.addPost(values.newPostText);
			values.newPostText = '';
		}
		return (
			<div className="MyPosts">
				<h4>My Posts</h4>
				<AddNewPostRedux onSubmit={onAddPost} />
				<div>
					{postsElements}
				</div>
			</div >
		)
	}
}

const AddNewPostRedux = reduxForm({
	// a unique name for the form
	form: 'PeofileAddNewPostForm'
})(AddNewPostForm)

export default MyPosts;
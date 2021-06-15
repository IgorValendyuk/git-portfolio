import React from 'react';
import './Dialogs.scss';
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLength, required } from '../../utils/validadors';


function Dialogs(props) {

	let dialogElements = props.dialogsPage.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} key={dialog.id} />)

	let messagesElements = props.dialogsPage.messagesData.map(message => <Message message={message.message} key={message.id} />)

	let AddNewMessage = (values) => {
		props.sendMessage(values.newMessageText);
		values.newMessageText = '';
	}

	return (
		<div className="Dialogs-container">
			<div className="Dialogs">
				<div className='users'>
					{dialogElements}
				</div>
				<div className='messages-users'>
					<div>{messagesElements}</div>
					<AddMessageFormRedux onSubmit={AddNewMessage} />
				</div>
			</div>
		</div>
	)
}

const maxLength50 = maxLength(50)

const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field component={Textarea}
				name='newMessageText'
				placeholder='Enter your message'
				validate={[required, maxLength50]} />
			<div><button>Send message</button></div>
		</form>
	)
}

const AddMessageFormRedux = reduxForm({
	// a unique name for the form
	form: 'dialogAddmessageForm'
})(AddMessageForm)

export default Dialogs;
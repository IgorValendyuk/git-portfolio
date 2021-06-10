import React from 'react';
import './Message.scss';

function Message(props) {
	return (
		<div className='message-user'>
			{props.message}
		</div>

	)
}

export default Message;
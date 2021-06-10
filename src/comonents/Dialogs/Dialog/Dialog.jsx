import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dialog.scss';

function Dialog(props) {
	return (
		<div className='user-name'>
			<img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" alt="" />
			<NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
		</div>
	)
}

export default Dialog;
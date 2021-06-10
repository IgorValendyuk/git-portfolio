import React from 'react';

import './Friend.scss';

function Friend(props) {

	return (
		<div className="name">
			<div><img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" alt="" /></div>
			<div>{props.name}</div>
		</div>
	)
}
export default Friend;
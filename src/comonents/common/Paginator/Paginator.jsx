import React from 'react';
import './Users.scss';
import photos from '../Profile/Profileinfo/img/avatar.jpg';
import { NavLink } from 'react-router-dom';


let Paginator = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return (

		<div>
			{pages.map(p => {
				return <span className={props.currentPage === p && 'selectedPage'}
					onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
			})}

		</div>

	)
}

export default Paginator;
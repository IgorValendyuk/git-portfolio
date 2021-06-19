import React, { useState } from 'react';
import './Users.scss';
import photos from '../Profile/Profileinfo/img/avatar.jpg';
import { NavLink } from 'react-router-dom';


let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let portionCount = Math.ceil(pagesCount / props.portionSize);
	let [portionNamber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNamber - 1) * props.portionSize + 1;
	let rightPortionPageNumber = portionNamber * props.portionSize;


	return (
		<div className='Users_Container'>
			<div className='Paginator'>
				{portionNamber > 1 &&
					<button className='nextBack' onClick={() => { setPortionNumber(portionNamber - 1) }} >back</button>}

				{pages
					.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
					.map(p => {
						return <a className={props.currentPage === p && 'selectedPage'}
							onClick={(e) => { props.onPageChanged(p); }}> {p} </a>
					})}

				{portionCount > portionNamber &&
					<button className='nextBack' onClick={() => { setPortionNumber(portionNamber + 1) }} >next</button>}
			</div>
			{
				props.users.map(u => <div className='usersInfo' key={u.id}>

					<div className='photosAvatar'>
						<NavLink to={'/profile/' + u.id}>
							<img alt='img' src={u.photos.small != null ? u.photos.small : photos} className='userPhoto' />
						</NavLink>

					</div>
					<div className='infoContainer'>
						<div className='Name'><NavLink to={'/profile/' + u.id}>{u.name}</NavLink></div>
						<div className='Unfollow_Follow'> {
							u.followed

								? <button
									disabled={props.followingInProgress}
									onClick={() => { props.unfollow(u.id) }}>Unfollow</button>

								: <button
									disabled={props.followingInProgress}
									onClick={() => { props.follow(u.id) }}>Follow</button>
						}
						</div>
					</div>
				</div>
				)
			}
		</div >
	)
}

export default Users;
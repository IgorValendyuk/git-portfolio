import React, { useState } from 'react';
import './Users.scss';
import photos from '../Profile/Profileinfo/img/avatar.jpg';
import { NavLink } from 'react-router-dom';


let Paginator = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let portionCount = Math.ceil(pagesCount / portionSize);
	let [portionNamber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNamber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNamber * portionSize;


	return (
		<div className='Users_Container'>
			<div>
				{portionNamber > 1 &&
					<button onClick={() => { setPortionNumber(portionNamber - 1) }} >PREV</button>}
			</div>
			<div >
				{pages
					.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
					.map(p => {
						return <span className={props.currentPage === p && 'selectedPage'}
							onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
					})}

				{portionCount > portionNamber &&
					<button onClick={() => { setPortionNumber(portionNamber + 1) }} >PREV</button>}

			</div>

			{
				props.users.map(u => <div key={u.id}>
					<span>
						<div>
							<NavLink to={'/profile/' + u.id}>
								<img alt='img' src={u.photos.small != null ? u.photos.small : photos} className='userPhoto' />
							</NavLink>

						</div>
						<div> {
							u.followed

								? <button
									disabled={props.followingInProgress}
									onClick={() => { props.unfollow(u.id) }}>Unfollow</button>

								: <button
									disabled={props.followingInProgress}
									onClick={() => { props.follow(u.id) }}>Follow</button>
						}
						</div>
					</span>
					<span>
						<div>{u.name}</div>
						<div>{u.status}</div>
					</span>
					<span>
						<div>{"u.location.country"}</div>
						<div>{"u.location.city"}</div>
					</span>
				</div>)
			}
		</div >
	)
}

export default Paginator;
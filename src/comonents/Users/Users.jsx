import React from 'react';
import './Users.scss';
import photos from '../Profile/Profileinfo/img/avatar.jpg';
import { NavLink } from 'react-router-dom';
import Pagination from "react-js-pagination";


let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div>
			<div>
				{pages.map(p => {
					return <span className={props.currentPage === p && 'selectedPage'}
						onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
				})}

			</div>

			{
				props.users.map(u => <div key={u.id}>
					<span>
						<div>
							<NavLink to={'/profile/' + u.id}>
								<img src={u.photos.small != null ? u.photos.small : photos} className='userPhoto' />
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

export default Users;
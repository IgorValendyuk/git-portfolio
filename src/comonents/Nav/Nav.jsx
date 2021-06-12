import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';
import Friend from './Friend/Friend'

function Nav(props) {

	let friendElements = props.friendsData.map(friend => <Friend key={friend.id} name={friend.name} />)

	return (
		<nav className="navbar">
			<ul>
				<NavLink to="/profile"><li>Profile</li></NavLink>
				<NavLink to="/users"><li>Users</li></NavLink>
				<NavLink to="/dialogs"><li>Messages</li></NavLink>
				<NavLink to="/news"><li>News</li></NavLink>
				<NavLink to="/music"><li>Music</li></NavLink>
				<NavLink to="/settings"><li>Settings</li></NavLink>
			</ul>
			<div className="friends_conteiner">
				{friendElements}
			</div>
		</nav >
	)
}

export default Nav;
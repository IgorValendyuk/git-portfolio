import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

function Nav(props) {
	return (
		<nav className="navbar">
			<ul>
				<NavLink to="/profile"><li> <span>Profile</span> </li></NavLink>
				<NavLink to="/users"><li><span>Users</span></li></NavLink>
				<NavLink to="/dialogs"><li><span>Messages</span></li></NavLink>
				<NavLink to="/news"><li><span>News</span></li></NavLink>
				<NavLink to="/music"><li><span>Music</span></li></NavLink>
				<NavLink to="/settings"><li><span>Settings</span></li></NavLink>
			</ul>
		</nav >
	)
}

export default Nav;
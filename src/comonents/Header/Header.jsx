import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header(props) {
	return (
		<header>
			<div className="header">
				<div className="logo">
					sdafsdgsfdhgdfdgsfdgbxcvbxchgfhsgffxc
				</div>
				<div className='login_block'>
					{props.isAuth ? <div>{props.login} - <button onClick={props.logout} >Log out</button> </div>
						: <NavLink to={'/login'}>Login</NavLink>}
				</div>
			</div>
		</header>
	)
}

export default Header;


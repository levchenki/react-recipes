import React from 'react';
import style from './Header.module.scss'
import {NavLink} from "react-router-dom";

const Header: React.FC = () => {
	return (
		<header>
			<div className={`${style.header} container`}>
				<NavLink to={'/'}>
					React Food
				</NavLink>
				<ul>
					<li>
						<a href={'https://github.com/levchenki/react-recipes'}>
							Repo
						</a>
					</li>
					<li>
						<NavLink to={'/about'}>
							About
						</NavLink>
					</li>
					<li>
						<NavLink to={'/contacts'}>
							Contacts
						</NavLink>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
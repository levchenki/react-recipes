import React from 'react';
import style from './Footer.module.scss'

const Footer:React.FC = () => {
	return (
		<footer>
			<footer>
				<div className={`${style.footer} container`}>
					{`${new Date().getFullYear()} Copyright Text`}
					<a href='https://github.com/levchenki/react-recipes'>Repository</a>
				</div>
			</footer>
		</footer>
	);
};

export default Footer;
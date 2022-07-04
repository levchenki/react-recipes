import React from 'react';
import {Outlet} from "react-router-dom";

const Main: React.FC = () => {
	return (
		<main className='container content'>
				<Outlet/>
		</main>
	);
};

export default Main;
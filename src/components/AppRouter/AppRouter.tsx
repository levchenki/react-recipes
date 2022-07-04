import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../../layout/Main/Main";
import {routes} from "./routes";

const AppRouter = () => {
	return (
		<Routes>
			<Route element={<Main/>}>
				{
					routes.map(route => (
						<Route key={route.path} element={route.element} path={route.path}/>
					))
				}
			</Route>
		</Routes>
	
	);
};

export default AppRouter;
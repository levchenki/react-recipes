import React from "react";
import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import CategoryPage from "../../pages/CategoryPage/CategoryPage";
import RecipePage from "../../pages/RecipePage/RecipePage";

type TRoutes = {
	path: RoutePaths,
	element: JSX.Element
}

export const enum RoutePaths {
	home = '/',
	about = '/about',
	contacts = '/contacts',
	notFound = '/*',
	category = '/category/:name',
	meal = '/meal/:id'
}

export const routes: readonly TRoutes[] = [
	{
		path: RoutePaths.home,
		element: <HomePage/>,
	},
	{
		path: RoutePaths.about,
		element: <AboutPage/>
	},
	{
		path: RoutePaths.contacts,
		element: <ContactsPage/>
	},
	{
		path: RoutePaths.notFound,
		element: <NotFoundPage/>
	},
	{
		path: RoutePaths.category,
		element: <CategoryPage/>
	},
	{
		path: RoutePaths.meal,
		element: <RecipePage/>
	},
]
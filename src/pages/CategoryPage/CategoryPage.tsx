import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getFilteredCategory} from "../../API";
import {TMeal} from "../../types";
import {Preloader} from "../../components/Preloader/Preloader";
import MealList from "../../components/Meal/MealList";

const CategoryPage: React.FC = () => {
	const [meals, setMeals] = useState<TMeal[]>([])
	const navigate = useNavigate()
	const {name} = useParams()
	
	useEffect(() => {
		if (name) getFilteredCategory(name)
		.then(data => {
			if (data) setMeals(data)
		})
	}, [name])
	
	return (
		<>
			<button onClick={()=>navigate(-1)}>go back</button>
			{!meals.length ? <Preloader/> : <>
				<MealList meals={meals}/>
				<button onClick={()=>navigate(-1)}>go back</button>
			</>}
		</>
	);
};

export default CategoryPage;
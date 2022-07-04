import React from 'react';
import style from './Meal.module.scss'
import {TMeal} from "../../types";
import {NavLink} from "react-router-dom";

const MealItem: React.FC<{item: TMeal}> = ({item: {idMeal,strMeal, strMealThumb}}) => {
	return (
		<NavLink to={`/meal/${idMeal}`}>
			<div className={style.meal_item}>
				<h2>{strMeal}</h2>
				<img src={strMealThumb} alt="food"/>
			</div>
		</NavLink>
	);
};

export default MealItem;
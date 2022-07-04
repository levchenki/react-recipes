import React from 'react';
import style from './Meal.module.scss'
import {TMeal} from "../../types";
import MealItem from "./MealItem";

const MealList: React.FC<{meals: TMeal[]}> = ({meals}) => {
	return (
		<div className={style.meal_list}>
			{meals.map(item => (
			<MealItem item={item} key={item.idMeal}/>
			))}
		</div>
	);
};

export default MealList;
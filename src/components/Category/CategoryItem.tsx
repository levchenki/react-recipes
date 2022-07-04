import React from 'react';
import style from './Category.module.scss'
import {TCategory} from "../../types";
import {NavLink} from "react-router-dom";

const CategoryItem: React.FC<{ item: TCategory }> = ({item: {strCategory, strCategoryThumb}}) => {
	
	return (
		<NavLink to={`category/${strCategory}`}>
			<div className={style.category_item}>
				<h2>{strCategory}</h2>
				<img src={strCategoryThumb} alt="food"/>
			</div>
		</NavLink>
	);
};

export default CategoryItem;
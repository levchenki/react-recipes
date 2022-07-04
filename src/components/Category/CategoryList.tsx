import React from 'react';
import style from './Category.module.scss'
import {TCategory} from "../../types";
import CategoryItem from "./CategoryItem";

const CategoryList: React.FC<{catalog: TCategory[]}> = ({catalog}) => {
	
	return (
		<div className={style.category_list}>
			{catalog.map(item => (
				<CategoryItem item={item} key={item.idCategory}/>
			))}
		</div>
	);
};

export default CategoryList;
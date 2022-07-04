import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getMealById} from "../../API";
import {TMealRecipe} from "../../types";
import {Preloader} from "../../components/Preloader/Preloader";
import style from './RecipePage.module.scss'

const RecipePage: React.FC = () => {
	const [recipe, setRecipe] = useState<TMealRecipe>()
	const navigate = useNavigate()
	const {id} = useParams()
	
	useEffect(() => {
		if (id) getMealById(id)
		.then(data => {
			setRecipe(data)
		})
	}, [])
	
	type RecipeKey = keyof typeof recipe
	
	const ingredients: string[] = []
	let i = 1
	if (recipe) {
		(Object.keys(recipe).map(key => {
					if (key.includes('Ingredient') && recipe[key as RecipeKey] !== null && recipe[key as RecipeKey] !== '') {
						ingredients.push(`${recipe[`strIngredient${i}` as RecipeKey]}: ${recipe[`strMeasure${i}` as RecipeKey]}`)
						i++
					}
				}
			)
		)
		console.log(ingredients)
	}
	return (
		<>
			<button onClick={() => navigate(-1)}>go back</button>
			{!recipe ? <Preloader/> :
				<div className={style.recipe}>
					<h1>{recipe.strMeal}</h1>
					<img src={recipe.strMealThumb} alt={recipe.strMeal}/>
					<h3>{`Category: ${recipe.strCategory}`}</h3>
					{recipe.strArea ? <h3>{`Area: ${recipe.strArea}`}</h3> : null}
					<p>{recipe.strInstructions}</p>
					<p>
						{ingredients.map(item => {
							if (item === ingredients.at(-1)) {
								return `${item}.`
							} else {
								return `${item}, `
							}
						})}
					</p>
					{recipe.strYoutube ? (
						<div className={style.row}>
							<h3>Video recipe</h3>
							<iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} title={id}
							        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							        allowFullScreen/>
						</div>
					) : null}
				</div>}
		</>
	);
};

export default RecipePage;
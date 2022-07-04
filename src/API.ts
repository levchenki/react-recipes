import axios from "axios";
import {API_URL} from "./config";
import {TCategory, TMeal, TMealRecipe} from "./types";


const getMealById = async (mealId: string) => {
	const query = `${API_URL}lookup.php?i=${mealId}`
	try {
		const response = await axios.get<{meals: TMealRecipe[]}>(query)
		return await response.data.meals[0]
	} catch (e) {
		console.error(e)
	}
}

const getAllCategories = async () => {
	const query = `${API_URL}categories.php`
	try {
		const response = await axios.get<{categories: TCategory[] }>(query)
		return await response.data.categories
	} catch (e) {
		console.error(e)
	}
}

const getFilteredCategory = async (categoryName: string) => {
	const query = `${API_URL}filter.php?c=${categoryName}`
	try {
		const response = await axios.get<{meals: TMeal[]}>(query)
		return await response.data.meals
	} catch (e) {
		console.error(e)
	}
}

export {getMealById, getAllCategories, getFilteredCategory}
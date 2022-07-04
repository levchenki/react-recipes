import React, {useEffect, useState} from 'react';
import {getAllCategories} from "../../API";
import {TCategory} from "../../types";
import {Preloader} from "../../components/Preloader/Preloader";
import CategoryList from "../../components/Category/CategoryList";
import Search from "../../components/Search/Search";
import {useLocation, useNavigate} from "react-router-dom";

const HomePage: React.FC = () => {
	const [catalog, setCatalog] = useState<TCategory[]>([])
	const [filteredCatalog, setFilteredCatalog] = useState<TCategory[]>([])
	const {search} = useLocation()
	const navigate = useNavigate()
	
	const handleSearch = (str: string) => {
		setFilteredCatalog(
			catalog.filter(item => item.strCategory.toLocaleLowerCase().includes(str.toLocaleLowerCase()))
		)
		navigate(`/?search=${str}`)
	}
	
	useEffect(() => {
		getAllCategories().then(data => {
			if (data) {
				setCatalog(data)
				setFilteredCatalog(search
					? data.filter(item => item.strCategory.toLocaleLowerCase().includes(search.split('=')[1].toLocaleLowerCase()))
					: data)
			}
		})
	}, [search])
	
	return (
		<>
			<Search cb={handleSearch}/>
			{!catalog.length ? <Preloader/> : (
				<CategoryList catalog={filteredCatalog}/>
			)}
		</>
	);
};

export default HomePage;
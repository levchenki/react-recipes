import React, {useState} from 'react';
import style from './Search.module.scss'

const Search: React.FC<{ cb: (str: string) => void }> = ({cb}) => {
	const [value, setValue] = useState('')
	
	const handleKey: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === 'Enter') {
			handleSubmit()
		}
	}
	
	const handleSubmit = () => {
		cb(value)
	}
	
	return (
		<div>
			<div className={style.search}>
				<input
					type="search"
					id='search'
					onKeyDown={handleKey}
					onChange={e => setValue(e.currentTarget.value)}
					value={value}
				/>
				<button onClick={() => handleSubmit()}>Search</button>
			</div>
		</div>
	);
};

export default Search;
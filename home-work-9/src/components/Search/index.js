import './styles.css'
import {useMemo, useState} from "react";

export const Search = ({setSearchResult}) => {
	const cities = useMemo(() => JSON.parse(localStorage.getItem('cities')), [])
	console.log(cities)
	const [value, setValue] = useState('')

	const onClick = () => {
		if (value && value.length > 0) {
			const filter = cities.filter((city) => {
				return city.label.toLowerCase().includes(value.toLowerCase())
			})

			return setSearchResult(filter)
		}

		return setSearchResult([...cities])
	}

	return (
		<div className={'search-wrapper'}>
			<input
				className={'search-input'}
				placeholder={'Поиск городов'}
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button onClick={onClick} className={'search-button'}>Найти</button>
		</div>
	)
}

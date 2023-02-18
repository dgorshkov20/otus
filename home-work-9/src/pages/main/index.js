import {Search} from "../../components/Search";
import {useState} from "react";
import {SearchItem} from "../../components/Search/SearchItem";

export const Main = () => {
	const [searchResult, setSearchResult] = useState([])

	const resultItems = searchResult.map(({name, label}) => {
		return (
			<div key={name}>
				<SearchItem name={name} label={label} />
			</div>
		)
	})

	return (
		<div>
			<Search setSearchResult={setSearchResult} />
			<hr />
			<div>
				{resultItems}
			</div>
		</div>
	)
}

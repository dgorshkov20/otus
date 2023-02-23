import {Link} from "react-router-dom";

export const SearchItem = ({label, name}) => {

	return (
		<Link to={`/city/${name}`}>
			<h3>{label}</h3>
		</Link>
	)
}

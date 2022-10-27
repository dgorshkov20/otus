const getPath = (element) => {
	const parents = []
	let currentElem = element

	while (currentElem) {
		parents.push(currentElem)
		currentElem = currentElem.parentNode
	}

	return parents.reverse()
}

getPath($0)


const getPath = (element) => {
	const parents = []
	let currentElem = element

	while (currentElem) {
		parents.push(currentElem)
		currentElem = currentElem.parentElement
	}

	const attributeToSelector = {
		'class': '.',
		'id': '#'
	}
	const attributes = []

	parents.forEach((elem) => {
			const tagName = elem.tagName.toLowerCase()
			if (!elem.getAttributeNames().length) {
				attributes.push(tagName)
			} else {
				for (const name of elem.getAttributeNames()) {
					const value = elem.getAttribute(name);
					if (attributeToSelector[name]) {
						attributes.push(`${tagName}${attributeToSelector[name]}${value}`)
					}
				}
			}

	})

	return attributes.reverse().join(' ')
}
console.log(getPath(document.querySelector('li')))


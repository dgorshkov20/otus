
const maxItemAssociation = (history) => {
	const getUniqItems = (array) => [...new Set(array.flat())]

	const allItems = getUniqItems(history)
	const hashMap = {}

	allItems.forEach((product) => {
		const filteredItems = history.filter((items) => new Set(items).has(product))
		hashMap[product] = getUniqItems(filteredItems)
	})

	const variables = []

	history.forEach((items) => {
		let arr = []

		items.forEach((item) => {
			arr = [...arr, ...hashMap[item]]
		})
		variables.push([...new Set(arr)])
	})

	const maxCount = Math.max(
		...variables.map((recommends) => recommends.length)
	)

	return variables
		.find((variable) => variable.length === maxCount)
		.sort()
}

console.log(maxItemAssociation([
	["q", "w", 'a'],
	["a", "b"],
	["a", "c"],
	["q", "e"],
	["q", "r"],
])) // ["a", "b", "c", "e", "q", "r", "w"]

const homeWork = (a) => {
	let result = 0

	return myFunc(a)

	function myFunc(b) {
		if (!b) {
			return result
		}

		result += b
		return myFunc
	}
}

console.log(homeWork(1)(2)(3)(4)())

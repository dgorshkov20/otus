const fn1 = () => {
	console.log('fn1')
	return Promise.resolve(1)
}

const fn2 = () => new Promise(resolve => {
	console.log('fn2')
	setTimeout(() => resolve(2), 1000)
})

const promiseReduce = async (asyncFunctions, reduce, initialValue) => {
	let result = initialValue

	for (const fn of asyncFunctions) {
		await fn().then((data) => {
			result = reduce(result, data)
		})
	}

	return result
}

promiseReduce(
	[fn1, fn2],
	function (memo, value) {
		console.log('reduce')
		return memo * value
	},
	1
)
	.then(console.log)

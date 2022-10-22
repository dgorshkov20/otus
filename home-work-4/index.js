import {readdir } from 'node:fs/promises'

const concatPath = (currentPath, item) => {
	return currentPath[currentPath.length - 1] === '/' ? currentPath + item.name : `${currentPath}/${item.name}`
}

const tree = async (path) => {
	const fileStructure = {
		files: [],
		'dirs': [path],
	}
	const queue = [path]

	while (queue.length) {
		const currentPath  = queue.shift()
		const dirents = await readdir(currentPath, {withFileTypes: true})
		const files = dirents.filter((item) => item.isFile())
		const dirs = dirents.filter((item) => item.isDirectory())

		files.forEach((item) => {
			fileStructure.files.push(concatPath(currentPath, item))
		})

		dirs.forEach((item) => {
			const newPath = concatPath(currentPath, item)

			fileStructure.dirs.push(newPath)
			queue.push(newPath)
		})

	}
	return fileStructure
}

tree('foo/').then((data) => console.log(data))

// {
// 	"files": [
// 		"foo/f1.txt",
// 		"foo/f2.txt",
// 		"foo/bar/bar1.txt",
// 		"foo/bar/bar2.txt"
// 	],
// 	"dirs": [
// 		"foo",
// 		"foo/bar",
// 		"foo/bar/baz"
// 	]
// }

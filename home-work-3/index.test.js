const getPath = require('./index.js')

describe('getPath', () => {
	document.body.innerHTML = `
	 	<div id="someId">
			<ul>
				<li class="first-elem">1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
				<li>6</li>
				<li>7</li>
			</ul>
    </div>
	`

	it('should be uniq element', function () {
		expect(getPath(
			document.querySelector('.first-elem'))
		).toBe('html body div#someId ul li.first-elem')
		expect(getPath(document.querySelector('ul'))).not.toBe('элемент не является уникальным')
	});

	it ('The element is not unique', function () {
		expect(
			getPath(document.querySelector('li:nth-child(2)'))
		).toBe('элемент не является уникальным')
	})
})

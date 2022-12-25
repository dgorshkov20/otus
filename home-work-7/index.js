class MyLeaf extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: "open"})
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = `
			<ul>
				<li>${this.getAttribute('data-value')}</li>
				<slot></slot>
			</ul>
		`
	}
}

class MyTree extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: "open"})
	}

	connectedCallback() {
		const data = JSON.parse(this.getAttribute('data-tree'))
		const root = this.shadowRoot
		root.innerHTML = `
				<div>
					<my-leaf data-value=${data.id}></my-leaf>
				</div>	
		`
		const rootLeaf = root.querySelector('my-leaf')

		const getTreeValue = (node, elem, num) => {
			node.forEach((tree, index) => {

				elem.insertAdjacentHTML('beforeend', `<my-leaf data-value=${tree.id}></my-leaf>`)
				const child = elem.querySelectorAll('my-leaf')[num]

				if (tree?.items?.length) {
					getTreeValue(tree.items, child, index)
				}
			})
		}

		getTreeValue(data.items, rootLeaf, 0)

	}
}

window.customElements.define('my-tree', MyTree)
window.customElements.define('my-leaf', MyLeaf)

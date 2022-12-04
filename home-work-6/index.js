import express from 'express';
import {buildSchema} from 'graphql'
import {graphqlHTTP} from 'express-graphql'
const port = 3000;

const products = [
	{
		id: 1,
		title: 'product_1',
		price: 100
	},
	{
		id: 2,
		title: 'product_2',
		price: 200
	},
	{
		id: 3,
		title: 'product_3',
		price: 300
	}
]

const orders = [
	{
		id: 1,
		email: '123@mail.ru',
		product: [products[0], products[2]]
	},
	{
		id: 2,
		email: '1234@mail.ru',
		product: [products[1]]
	}
]

const users = [
	{
		id: 1,
		email: '123@mail.ru',
		orders: [],
	},
	{
		id: 2,
		email: '1234@mail.ru',
		orders: [],
	},
]

const schema = buildSchema(`
	type Order {
			id: ID!
			email: String!
			product: [Product]
	}
	
	type User {
			id: ID!
			email: String!
			orders: [Order]
	}
	
	type Product {
			id: ID!
			title: String!
			price: Int!
	}
	
	type Query {
			getAllUsers: [User]
			getAllProducts: [Product]
			getUserById(id: Int!): User
	}
	
	input AddOrderInput {
			email: String!
			productIds: [Int]!
	}
	
	type Mutation {
			createUser(email: String!): User!, 
			addOrder(order: AddOrderInput!): Order!
	}
`)

const root = {
	getAllUsers: () => {
		const usersWithOrders = users.map((user) => {
			const newOrders = orders.filter((order) => order.email === user.email)

			return {
				...user,
				orders: newOrders
			}
		})

		return usersWithOrders
	},
	getAllProducts: () => {
		return products
	},
	getUserById: ({id}) => {
		const newOrders = orders.filter((order) => order.email === users[id].email)
		return {
			...users[id],
			orders: newOrders
		}
	},
	createUser: ({email}) => {
		const newUser = {
			id: users.length + 1,
			email: email,
			order: []
		}
		users.push(newUser)
		return newUser
	},
	addOrder: (addOrder) => {
		const {email, productIds} = addOrder.order
		const product = products.filter((product) => new Set(productIds).has(product.id))
		const newOrder = {
			id: orders.length + 1,
			email: email,
			product: product
		}

		orders.push(newOrder)

		return newOrder
	}
}

root.getAllUsers()

const app = express();
app.use('/', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true
}));

app.listen(port);
console.log('GraphQL API server running at localhost: ' + port);

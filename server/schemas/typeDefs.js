const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID!
		username: String
		email: String
		password: String
		savedBooks: [Book]
	}

	type Book {
		_id: ID!
		authors: [Author]
		description: String
		bookId: String
		image: String
		link: String
		title: String
	}

	type Author {
		_id: ID!
		name: String
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		me: User
	}

	type Mutation {
		createUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
		saveBook(bookId: String!): Book
		deleteBook(bookId: String!): Book
	}
`;

module.exports = typeDefs;

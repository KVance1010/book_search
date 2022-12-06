const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Book{
  authors: [Author]!
  description: String
  bookId: String
  image: String
  link: String
  title: String
  }

  type Author {
    _id: ID
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
    saveBook(bookId: ID!): Book
    deleteBook( bookId: ID!): Book
  }
`;

module.exports = typeDefs;

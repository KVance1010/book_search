import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const Create_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const Save_BOOK = gql`
  mutation saveBook($bookId: ID!) {
    saveBooks(bookId: $bookId) {
      _id
      description
      bookId
      image
      link
      title
      Author {
        _id
        name
      }
    }
  }
`;

export const Delete_Book = gql`
  mutation deleteBook($bookId: ID!) {
    deleteBook($bookId: ID!) {
     
    }
  }
`;

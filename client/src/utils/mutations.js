import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//saving articles for each user to access
export const SAVE_ARTICLE = gql`
  mutation saveArticle(
    $title: String!
    $description: String!
    $content: String!
    $url: String!
    $image: String
    $publishedAt: String
  ) {
    saveArticle(
      title: $title
      description: $description
      content: $content
      url: $url
      publishedAt: $publishedAt
      image: $image
    ) {
      _id
      userID
      title
      description
      content
      url
      publishedAt
      image
    }
  }
`;

//removing saved articles from dashboard
export const REMOVE_ARTICLE = gql`
  mutation remove($_id: ID!) {
    removeArticle(_id: $_id) {
      _id
      userID
      title
      description
      content
      url
      publishedAt
      image
    }
  }
`;

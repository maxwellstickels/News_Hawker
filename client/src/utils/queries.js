import { gql } from '@apollo/client';

export const GET_ME = gql`
  query getUser($_id: String) {
    me(_id: $_id) {
      _id
      username
      email
      password
      savedArticles {
        title
        description
        url
        image
        publishedAt
        content
      }
    }
  }
`;

export const GET_ARTICLE = gql`
  query getArticle($search: String!) {
    getArticle(search: $search) {
      title
      description
      content
      url
      image
      publishedAt
    }
  }
`;

export const GET_SAVED_ARTICLES = gql`
  query getSavedArticles {
    getSavedArticles {
      title
      description
      content
      url
      image
      publishedAt
    }
  }
`;

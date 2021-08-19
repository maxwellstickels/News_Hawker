import { gql } from '@apollo/client';

export const GET_ME = gql`
  query getUser($_id: String) {
    me(_id: $_id) {
      _id
      username
      email
      password
      savedArticles {
        source
        authors
        title
        description
        url
        urlToImage
        publishedAt
        content
      }
    }
  }
`;
//add

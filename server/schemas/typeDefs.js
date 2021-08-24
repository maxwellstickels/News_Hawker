const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedArticles: [Article]
  }

  type Article {
    _id: ID!
    userID: ID
    authors: [String]
    title: String!
    description: String!
    url: String!
    image: String
    publishedAt: String
    content: String!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me(_id: String): [User]
    getArticle(search: String!): [Article]
    getSavedArticles(_id: ID!): [Article]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveArticle(
      authors: [String]
      title: String!
      description: String!
      url: String!
      image: String
      publishedAt: String
      content: String!
    ): Article

    removeArticle(_id: ID!): Article
  }
`;
//{ "email": "sample3@email.com", "password": "sample3"}

module.exports = typeDefs;

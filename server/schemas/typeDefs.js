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
  }

   type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
   }
`;

module.exports = typeDefs;

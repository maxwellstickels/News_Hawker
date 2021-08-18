const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const articleSchema = new Schema({
  source: {},
  author: [
    {
      type: String,
    },
  ],
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  urlToImage: {
    type: String,
  },
  publishedAt: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = articleSchema;

const { Schema, model } = require('mongoose');

//sub-schema for articles to be used in User model
const articleSchema = new Schema({
  // source: {
  //   id: {
  //     type: String,
  //   },
  //   name: {
  //     type: String,
  //   },
  // },
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
  image: {
    type: String,
  },
  publishedAt: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
  },
});

const Article = model('Article', articleSchema);

module.exports = Article;
//module.exports = articleSchema;

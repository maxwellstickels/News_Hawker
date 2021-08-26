const { Schema, model } = require('mongoose');

//sub-schema for articles to be used in User model
const articleSchema = new Schema({
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
});

const Article = model('Article', articleSchema);

module.exports = Article;

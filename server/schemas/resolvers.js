const { AuthenticationError } = require('apollo-server-express');
const { User, Article } = require('../models');
const { signToken } = require('../utils/auth');

const fetch = require('node-fetch');

const resolvers = {
  Query: {
    //finds user using context
    me: async (parents, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id });

        if (user) {
          return user;
        }
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    //uses gnews API to fetch top 10 articles in the US based on search
    getArticle: async (parents, { search }, context) => {
      try {
        const response = await fetch(
          `https://gnews.io/api/v4/top-headlines?q=${search}&country=us&token=7f1fd78c002cebd14e04533b292de6bb`
        );

        const data = await response.json();
        const { articles = [] } = data;
        return articles;
      } catch (err) {
        throw new Error(err);
      }
    },
    //finds all saved articles under userID
    getSavedArticles: async (parents, args, context) => {
      if (context.user) {
        const articles = await Article.find({ userID: context.user._id });
        console.log(articles);
        if (articles) {
          return articles;
        }
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    //creates a new user with valid login token
    addUser: async (parents, args) => {
      const user = await User.create(args);
      console.log(user);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    // logged in users can save articles
    // saveArticle: async (parents, args, context) => {
    //   //if user is logged in and has valid jwt then allow functionality
    //   if (context.user) {
    //     return await Article.create({ ...args, userID: context.user._id });
    //   } //throw error if user isn't logged in
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    saveArticle: async (parent, { articleData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedArticles: articleData } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    // logged in users can remove an article they have saved
    removeArticle: async (parents, { _id }, context) => {
      if (context.user) {
        return Article.findOneAndDelete({ _id });
      } //throw error if user isn't logged in
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;

const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

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
  },
  Mutation: {
    //creates a new user with valid login token
    addUser: async (parents, args) => {
      const user = await User.create(args);
      console.log(user);
      const token = signToken(user);

      return { token, user };
    },

    //checks if user has entered correct email and password for log in
    login: async (parents, { email, password }) => {
      const user = await User.findOne({ email });
      if (user) {
        const correctPw = await User.isCorrectPassword(password);

        if (correctPw) {
          let token = signToken(user);

          if (token) {
            return { user, token };
          } else {
            console.error('failed to create token');
          }
        } else {
          throw new AuthenticationError('Invalid profile email or password!');
        }
      } else {
        console.error('failed to find user. check seeds or create this user');
        return;
      }
    },
  },
};

module.exports = resolvers;

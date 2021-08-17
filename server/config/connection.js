const mongoose = require('mongoose');
// Using Mongoose to connect db to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/articles', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;

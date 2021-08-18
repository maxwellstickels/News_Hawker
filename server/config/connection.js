const mongoose = require('mongoose');
//set up MongoDb.
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/articles', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;

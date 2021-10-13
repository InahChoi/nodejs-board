import mongoose from 'mongoose';

// mongoDB connection
mongoose.connect("mongodb://localhost/8080",{ 
useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
  .then(() => console.log('Connected to mongo database!🐵🤍'))
  .catch(err => console.error.log(err, '📟Error connection to database📟'));
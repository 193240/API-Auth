const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI
? process.env.MONGODB_URI 
: 'mongodb://localhost/apiLR'; 

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(URI, {

    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};

// mongoose.connect(URI,{
// });
// const connection = mongoose.connection;

// connection.once('open', () => {
//     console.log('DB esta conectado');
// });
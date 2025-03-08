const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, {})
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    })
}

module.exports=connectDatabase;

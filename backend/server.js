const app = require('./app');


const dotenv = require('dotenv');
const connectDatabase=require("./configuration/database");



 //Config
dotenv.config({ path: 'backend/configuration/config.env' });
//Connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
})
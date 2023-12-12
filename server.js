const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");

//config dot env file
dotenv.config();

//database
connectDb();

// rest object
const app = express();

//middlewares
app.use(morgan());
app.use(express.json());
app.use(cors());

//routes
//user routes
app.use('/api/v1/users', require('./routes/userRoute'))

//transactions routes
app.use('/api/v1/transactions',require("./routes/transactionRoutes"))

//port
const PORT = 8080 || process.env.PORT;

//listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

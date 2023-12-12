const mongoose = require("mongoose");

//schema design just like we create a table in SQL, we create a schema in mongoDB
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"], // User MUST enter a name
    },
    email: {
      type: String,
      required: [true, "email is required and should be unique"], // User MUST enter an email id
    },
    password: {
      type: String,
      required: [true, "password is rquired"], // User MUST enter a password
    },
  },
  { timestamps: true }
);

//export
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;

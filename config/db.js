const mongoose = require("mongoose");
const { MONGODB_URI } = process.env;

const connect = async () => {
  mongoose.connect(MONGODB_URI, {}, (e) => {
    if (e) console.log(e.message);
    else console.log("Connected to db Sucessfully");
  });
};

module.exports = connect;

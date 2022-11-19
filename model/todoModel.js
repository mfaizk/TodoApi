const mongoose = require("mongoose");
const { Schema } = mongoose;
const TodoModel = Schema({
  title: {
    type: String,
    require: true,
  },
  task: {
    type: [String],
    index: true,
  },
});

module.exports = mongoose.model("todo", TodoModel);

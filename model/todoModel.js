const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskModel = Schema({
  task: String,
});

const TodoModel = Schema({
  title: {
    type: String,
    require: true,
  },
  task: {
    type: [TaskModel],
  },
});

module.exports = mongoose.model("todo", TodoModel);

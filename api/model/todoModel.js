const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskModel = Schema(
  {
    task: String,
  },
  { timestamps: true }
);

const TodoModel = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    task: {
      type: [TaskModel],
    },
  },
  { timestamps: true }
);

const UserTodoModel = Schema({
  todos: [TodoModel],
  _id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("todo", UserTodoModel);

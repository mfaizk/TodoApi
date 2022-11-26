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
      require: true,
    },
    task: {
      type: [TaskModel],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("todo", TodoModel);

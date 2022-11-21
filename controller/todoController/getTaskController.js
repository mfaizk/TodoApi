const Todo = require("../../model/todoModel");

const getTaskController = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    if (!todo) res.send({ message: "No Todo exist" });
    const task = todo.task;
    if (!task) res.send({ message: "no task exist" });
    res.status(200).json(task);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = getTaskController;

const Todo = require("../../model/todoModel");

const getTaskController = async (req, res) => {
  const { id, sortBy } = req.params;
  if (sortBy == "default") {
    try {
      const todo = await Todo.findById(id);
      return res.status(200).json(todo.task);
    } catch (error) {
      return res.send(error.message);
    }
  } else if (sortBy == "ctime") {
    try {
      const todo = await Todo.findById(id);
      const task = todo.task.sort((x, y) => y.createdAt - x.createdAt);
      return res.send(task);
    } catch (error) {
      return res.send(error.message);
    }
  } else if (sortBy == "uptime") {
    try {
      const todo = await Todo.findById(id);
      const task = todo.task.sort((x, y) => y.updatedAt - x.updatedAt);
      return res.send(task);
    } catch (error) {
      return res.send(error.message);
    }
  }
  return res.status(401).send("Invalid param");
};

module.exports = getTaskController;

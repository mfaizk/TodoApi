const Todo = require("../../model/todoModel");

const getTaskController = async (req, res) => {
  const { id, sortBy } = req.params;
  const data = await Todo.findById(req.user.id);
  const todoIndex = data.todos.findIndex((e) => e._id == id);
  const { task } = data.todos[todoIndex];
  if (sortBy == "default") {
    try {
      return res.status(200).json(task);
    } catch (error) {
      return res.send(error.message);
    }
  } else if (sortBy == "ctime") {
    try {
      const sortedTask = task.sort((x, y) => x.createdAt - y.createdAt);
      return res.send(sortedTask);
    } catch (error) {
      return res.send(error.message);
    }
  } else if (sortBy == "uptime") {
    try {
      const sortedTask = task.sort((x, y) => x.updatedAt - y.updatedAt);
      return res.send(sortedTask);
    } catch (error) {
      return res.send(error.message);
    }
  }
  return res.status(401).send("Invalid param");
};

module.exports = getTaskController;

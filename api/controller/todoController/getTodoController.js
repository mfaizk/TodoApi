const Todo = require("../../model/todoModel");

const getTodoController = async (req, res) => {
  console.log(req.user);
  const { sortBy } = req.params;

  const data = await Todo.findById(req.user.id);
  if (!data) return res.send({ msg: "No todo found" });
  const { todos } = data;

  if (sortBy == "default") {
    try {
      return res.status(200).json(todos);
    } catch (error) {
      return res.send(error.message);
    }
  } else if (sortBy == "ctime") {
    try {
      const sortedTodo = todos.sort((a, b) => a.createdAt - b.createdAt);
      return res.send(sortedTodo);
    } catch (error) {
      return res.send(error.message);
    }
  } else if (sortBy == "uptime") {
    try {
      const sortedTodo = todos.sort((a, b) => a.updatedAt - b.updatedAt);
      return res.send(sortedTodo);
    } catch (error) {
      return res.send(error.message);
    }
  }
  res.status(401).send("Sort param require");
};

module.exports = getTodoController;

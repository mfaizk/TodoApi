const Todo = require("../../model/todoModel");

const getTodoController = async (req, res) => {
  console.log(req.user);
  const { sortBy } = req.params;
  if (sortBy == "default") {
    try {
      const resp = await Todo.find();
      return res.status(200).json(resp);
    } catch (error) {
      return res.send(error.message);
    }
  } else if (sortBy == "ctime") {
    try {
      const todos = await Todo.find().sort({ createdAt: -1 });
      return res.send(todos);
    } catch (error) {
      return res.send(error.message);
    }
  } else if (sortBy == "uptime") {
    try {
      const todos = await Todo.find().sort({ updatedAt: -1 });
      return res.send(todos);
    } catch (error) {
      return res.send(error.message);
    }
  }
  res.status(401).send("Sort param require");
};

module.exports = getTodoController;

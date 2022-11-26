const Todo = require("../../model/todoModel");

const searchTaskController = async (req, res) => {
  const { searchText } = req.body;
  if (!searchText) return res.status(401).send("invalid data");
  const { id } = req.params;
  const data = await Todo.findById(req.user.id);
  if (!data) return res.status(401).send("Invalid id");
  const todoIndex = data.todos.findIndex((e) => e._id == id);

  const matchedTask = data.todos[todoIndex].task.filter((e) =>
    e.task.toLowerCase().includes(searchText.toLowerCase())
  );
  if (matchedTask.length < 1) return res.send("no matched task found");
  res.status(200).send(matchedTask);
};

module.exports = searchTaskController;

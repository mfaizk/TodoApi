const Todo = require("../../model/todoModel");
const editTodoController = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  if (!title) return res.status(401).send({ msg: "Insufficient data" });
  const data = await Todo.findById(req.user.id);
  if (!data) return res.status(401).send({ msg: "todo not found" });
  const todoIndex = data.todos.findIndex((e) => e.id == id);
  try {
    data.todos[todoIndex].title = title;
    data.save();
    res.status(200).send(data.todos[todoIndex]);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = editTodoController;

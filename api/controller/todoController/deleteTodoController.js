const Todo = require("../../model/todoModel");

const deleteTodoController = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(401).send({ msg: "insufficient data" });
  try {
    const data = await Todo.findById(req.user.id);
    const todoIndex = data.todos.findIndex((e) => e._id == id);
    const todoToDelete = data.todos[todoIndex];
    data.todos.splice(todoIndex, 1);
    await data.save();
    res.status(200).send(todoToDelete);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = deleteTodoController;

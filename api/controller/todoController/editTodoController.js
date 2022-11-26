const Todo = require("../../model/todoModel");

const editTodoController = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  //   console.log(id);
  //   res.send(id);
  //   console.log(title);

  try {
    console.log(id);
    const todo = await Todo.findById(id);
    console.log(todo);
    todo.title = title;
    todo.save();
    res.status(200).json(todo);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = editTodoController;

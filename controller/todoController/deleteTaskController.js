const Todo = require("../../model/todoModel");

const deleteTaskController = async (req, res) => {
  const { id } = req.params;
  const { index } = req.body;

  try {
    let todo = await Todo.findById(id);
    todo.task.splice(index, 1);
    // console.log(todo.task);
    await todo.save();
    res.status(200).json({
      sucess: true,
      todo,
    });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = deleteTaskController;

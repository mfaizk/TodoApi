const Todo = require("../../model/todoModel");

const deleteTaskController = async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  try {
    await Todo.findById(id).then((todo) => {
      item = todo.task.filter((e) => e != task);
      item.save();
    });

    res.status(200).json({
      sucess: true,
      updatedTodo,
    });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = deleteTaskController;

const Todo = require("../../model/todoModel");

const editTaskController = async (req, res) => {
  const { todoId, taskId } = req.params;
  const { editedtask } = req.body;

  try {
    const todo = await Todo.findById(todoId);
    const taskIndex = todo.task.findIndex((e) => e._id == taskId);
    todo.task[taskIndex].task = editedtask;
    todo.save();
    res.send(todo);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = editTaskController;

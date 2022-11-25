const Todo = require("../../model/todoModel");

const deleteTaskController = async (req, res) => {
  const { todoId, taskId } = req.params;

  try {
    let todo = await Todo.findById(todoId);
    let taskIndex = todo.task.findIndex((e) => e._id == taskId);
    todo.task.splice(taskIndex, 1);
    await todo.save();
    res.status(200).send(todo);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = deleteTaskController;

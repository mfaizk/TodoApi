const Todo = require("../../model/todoModel");

const editTaskController = async (req, res) => {
  const { todoId, taskId } = req.params;
  const { editedtask } = req.body;

  try {
    const todo = await Todo.findById(todoId);
    const existingTask = todo.task.map((e) => {
      if (taskId == e._id) {
        e.task = editedtask;
        return e;
      } else {
        return e;
      }
    });
    todo.task.splice(0, todo.task.length);
    todo.task.push(...existingTask);
    todo.save();
    res.send(todo);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = editTaskController;

const Todo = require("../../model/todoModel");

const deleteTaskController = async (req, res) => {
  const { todoId, taskId } = req.params;
  try {
    const data = await Todo.findById(req.user.id);
    const todoIndex = data.todos.findIndex((e) => e._id == todoId);
    const taskIndex = data.todos[todoIndex].task.findIndex(
      (e) => e._id == taskId
    );

    data.todos[todoIndex].task.splice(taskIndex, 1);
    await data.save();
    res.status(201).send({
      msg: "Success",
    });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = deleteTaskController;

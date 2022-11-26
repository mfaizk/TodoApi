const Todo = require("../../model/todoModel");

const editTaskController = async (req, res) => {
  const { todoId, taskId } = req.params;
  const { editedtask } = req.body;
  try {
    const data = await Todo.findById(req.user.id);
    if (!data) return res.send({ msg: "todo not found" });
    const todoIndex = data.todos.findIndex((e) => e._id == todoId);
    const taskIndex = data.todos[todoIndex].task.findIndex(
      (e) => e._id == taskId
    );
    data.todos[todoIndex].task[taskIndex].task = editedtask;
    await data.save();
    res.status(201).send(data.todos[todoIndex].task[taskIndex]);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = editTaskController;

const Todo = require("../../model/todoModel");

const deleteTaskController = async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  try {
    let todo = await Todo.findById(id);
    if (!todo.task.includes(task)) return res.send("Task Doesn't exist");

    let updatedtask = todo.task.filter((e) => e != task);
    todo.task.splice(0, todo.task.length);
    todo.task.push(...updatedtask);
    todo.save();
    res.status(200).json({
      sucess: true,
      todo,
    });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = deleteTaskController;

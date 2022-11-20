const Todo = require("../../model/todoModel");

const deleteTaskController = async (req, res) => {
  const { id } = req.params;
  const { taskId } = req.body;

  try {
    let todo = await Todo.findById(id);
    // console.log(todo);
    updatedTodo = todo.task.filter((e) => e._id != taskId);
    // console.log(timestamp);
    todo.task.splice(0, todo.task.length);
    todo.task.push(...updatedTodo);
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

const Todo = require("../../model/todoModel");

const addTaskController = async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  if (!task) res.status(401).send("Enter valid data");

  try {
    const todo = await Todo.findById(id);
    // console.log(task);
    todo.task.push({ task });
    await todo.save();
    res.status(200).json({
      sucess: true,
      todo,
    });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = addTaskController;
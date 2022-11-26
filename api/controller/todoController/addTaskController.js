const Todo = require("../../model/todoModel");

const addTaskController = async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  if (!task) res.status(401).send("Enter valid data");
  const data = await Todo.findById(req.user.id);

  if (!data) return res.send({ msg: "No task exist" });
  try {
    const todoIndex = data.todos.findIndex((e) => e._id == id);
    // console.log(data.todos[todoIndex].task);

    data.todos[todoIndex].task.push({ task });
    await data.save();
    res.status(200).send({
      msg: "Success",
      data: data.todos[todoIndex],
    });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = addTaskController;

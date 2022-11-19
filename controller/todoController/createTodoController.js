const User = require("../../model/todoModel");

const createTodoController = async (req, res) => {
  const { title } = req.body;
  if (!title) res.send("Empty title");

  try {
    const todo = await User.create({ title });
    res.status(200).json(todo);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = createTodoController;

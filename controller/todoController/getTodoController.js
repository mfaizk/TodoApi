const Todo = require("../../model/todoModel");

const getTodoController = async (req, res) => {
  try {
    const resp = await Todo.find();
    res.status(200).json(resp);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = getTodoController;

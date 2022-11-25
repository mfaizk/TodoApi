const Todo = require("../../model/todoModel");

const searchTodoContoller = async (req, res) => {
  const { searchText } = req.body;
  if (!searchText) return res.send("no text found in body");
  const todos = await Todo.find();
  const matchedTodo = todos.filter((e) =>
    e.title.toLowerCase().includes(searchText.toLowerCase())
  );
  if (matchedTodo.length < 1) return res.status(404).send("No Todo found");
  console.log();
  res.send(matchedTodo);
};

module.exports = searchTodoContoller;

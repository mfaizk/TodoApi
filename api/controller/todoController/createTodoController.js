const User = require("../../model/todoModel");

const createTodoController = async (req, res) => {
  const { title } = req.body;
  if (!title) res.status(401).send("Empty title");
  // console.log(req.user._id);
  const data = await User.findById(req.user.id);
  // console.log(data);
  if (data) {
    data.todos.push({ title });
    const todos = await data.save();
    res.status(201).send(todos.todos);
  } else {
    const dataToInsert = {
      todos: [
        {
          title,
        },
      ],
      _id: req.user.id,
    };
    try {
      const todo = await User.create(dataToInsert);
      res.status(200).json(todo.todos);
    } catch (error) {
      res.send(error.message);
    }
  }
};

module.exports = createTodoController;

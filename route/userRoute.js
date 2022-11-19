const express = require("express");
const router = express.Router();
const createTodoController = require("../controller/todoController/createTodoController");
const editTodoController = require("../controller/todoController/editTodoController");
const deleteTodoController = require("../controller/todoController/deleteTodoController");
const addTaskController = require("../controller/todoController/addTaskController");
router.get("/", (req, res) => {
  res.send("Hello");
});
router.post("/create", createTodoController);
router.put("/updateTodo/:id", editTodoController);
router.delete("/deleteTodo/:id", deleteTodoController);
router.put("/addTask/:id", addTaskController);

module.exports = router;

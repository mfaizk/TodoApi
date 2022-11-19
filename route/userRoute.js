const express = require("express");
const router = express.Router();
const createTodoController = require("../controller/todoController/createTodoController");
const editTodoController = require("../controller/todoController/editTodoController");
const deleteTodoController = require("../controller/todoController/deleteTodoController");
const addTaskController = require("../controller/todoController/addTaskController");
const deleteTaskController = require("../controller/todoController/deleteTaskController");
router.get("/", (req, res) => {
  res.send("Hello");
});

// TODO ROUTES
router.post("/create", createTodoController);
router.put("/updateTodo/:id", editTodoController);
router.delete("/deleteTodo/:id", deleteTodoController);

// TASK ROUTES
router.put("/addTask/:id", addTaskController);
router.delete("/deletetask/:id", deleteTaskController);

module.exports = router;

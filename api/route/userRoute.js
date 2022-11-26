const express = require("express");
const router = express.Router();
const createTodoController = require("../controller/todoController/createTodoController");
const editTodoController = require("../controller/todoController/editTodoController");
const deleteTodoController = require("../controller/todoController/deleteTodoController");
const addTaskController = require("../controller/todoController/addTaskController");
const deleteTaskController = require("../controller/todoController/deleteTaskController");
const getTodoController = require("../controller/todoController/getTodoController");
const getTaskController = require("../controller/todoController/getTaskController");
const editTaskController = require("../controller/todoController/editTaskController");
const searchTodoContoller = require("../controller/todoController/searchTodoController");
const searchTaskController = require("../controller/todoController/searchTaskController");
router.get("/", (req, res) => {
  res.send("Hello");
});

// TODO ROUTES
router.post("/create", createTodoController);
router.put("/updateTodo/:id", editTodoController);
router.delete("/deleteTodo/:id", deleteTodoController);
router.get("/getTodo/:sortBy", getTodoController);
router.get("/searchTodo", searchTodoContoller);

// TASK ROUTES
router.put("/addTask/:id", addTaskController);
router.delete("/deleteTask/:todoId/:taskId", deleteTaskController);
router.get("/getTask/:id/:sortBy", getTaskController);
router.put("/editTask/:todoId/:taskId", editTaskController);
router.get("/searchTask/:id", searchTaskController);

module.exports = router;

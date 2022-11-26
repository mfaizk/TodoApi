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
const SignUpController = require("../controller/authController/signUpController");
const SignInController = require("../controller/authController/signInController");
const auth = require("../controller/authController/authMiddleWare");
router.get("/", (req, res) => {
  res.send("Hello");
});

// TODO ROUTES
router.post("/create", auth, createTodoController);
router.put("/updateTodo/:id", auth, editTodoController);
router.delete("/deleteTodo/:id", auth, deleteTodoController);
router.get("/getTodo/:sortBy", auth, getTodoController);
router.get("/searchTodo", auth, searchTodoContoller);

// TASK ROUTES
router.put("/addTask/:id", addTaskController);
router.delete("/deleteTask/:todoId/:taskId", deleteTaskController);
router.get("/getTask/:id/:sortBy", getTaskController);
router.put("/editTask/:todoId/:taskId", editTaskController);
router.get("/searchTask/:id", searchTaskController);

// AUTH ROUTES
router.post("/signup", SignUpController);
router.get("/signin", SignInController);

module.exports = router;

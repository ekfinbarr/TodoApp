import express from "express";
import TodoController from "../todosControllers/todos";

const router = express.Router();

router.get("/api/v1/", TodoController.home);
router.get("/api/v1/todos", TodoController.getAllTodos);
router.get("/api/v1/todo/:id", TodoController.getTodo);
router.post("/api/v1/todo", TodoController.createTodo);
router.put("/api/v1/todo/:id", TodoController.updateTodo);
router.delete("/api/v1/todo/:id", TodoController.deleteTodo);

export default router;
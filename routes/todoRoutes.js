import express from "express"
import { deleteTodo, getTodo, patchTodo, postTodo } from "../controllers/todoControllers.js";

const todoRoutes = express.Router();

todoRoutes.post("/todos", postTodo);
todoRoutes.get("/todos", getTodo )
todoRoutes.patch("/todos/:id", patchTodo);
todoRoutes.delete("/todos/:id", deleteTodo)

export {todoRoutes}

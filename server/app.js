import express from "express"
import db from "./db.js"
import { todoRoutes } from "../routes/todoRoutes.js";


const app = express();

app.use(express.json());
db();

app.use("/", todoRoutes);

app.listen(8000, ()=>{ 
    console.log("Server running on http://localhost:8000");
})   
  
import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    status: {type: String, require: true}
})

const todos = mongoose.model("Todo", todoSchema)

export default todos;
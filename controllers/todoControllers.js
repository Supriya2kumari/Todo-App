import todos from "../model/todoModel.js"

const postTodo = async(req, res)=>{
    try {
        const data = await todos(req.body);
        data.save();
        res.status(201).json(data)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getTodo = async (req, res)=>{
    try{
        const data = await todos.find();
        res.status(200).json(data)
    }catch(error){
        res.status(500).send(error)
    }
}

const patchTodo = async (req, res) => {
    try{
        const data = await todos.findByIdAndUpdate(req.params.id, req.body)
        if(!data){
            return res.status(404).json("Id not found");
        }
        res.status(200).json(data);
    }catch(error){
        res.status(500).send(error)
    }
}

const deleteTodo = async (req, res) => {
    try{
        const data = await todos.findByIdAndDelete(req.params.id)
        if(!data){
            return res.status(404).json("Id not found")
        }
        res.status(200).json(data)
    }catch(error){
        res.status(500).send(error)
    }
}

export {postTodo, getTodo, patchTodo, deleteTodo}
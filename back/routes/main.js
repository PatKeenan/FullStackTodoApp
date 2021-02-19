//imports
const express = require("express")
const router = express.Router()
const bodyparser = require("body-parser")
const Todo = require("../models/Todo.model")


//get 
//get all todos
router.get('/', async (req, res) => {
    try{
        const todos = await Todo.find()
        res.status(200).json(todos)
    }catch(err){
        res.status(400).json({message: err})
    }
})


//post
router.post('/', async (req, res) => {
    const newTodo = new Todo({
        title : req.body.title
    })
    try{
        const savedTodo = await newTodo.save();
        res.status(200).json(savedTodo);
    }catch{
        res.status(400).json({message: err})
    }
})

//delete a todo
router.delete('/:titleId', async (req, res)=>{
    try{
        const removedPost = await Todo.remove({_id: req.params.titleId});
        res.status(200).json(removedPost)
    }catch(err){
        res.status(400).json({message: err})
    }
})

//update a todo

router.patch('/:titleId', async (req, res) =>{
    try{
        const updatedTodo = await Todo.updateOne({_id: req.params.titleId}, {$set: {
            status : req.body.status,
            title: req.body.title
        }});
        res.status(200).json(updatedTodo)
    }catch(err){
        res.status(400).json({message:err})
    };
})




module.exports = router
const Task=require('../models/tasks')

const getAllTasks=async (req,res)=>{
    try{
        const task=await Task.find({})
        res.status(200).json({task})
    }catch(error){
        res.status(500).json({msg:error})
    }
}

const createTasks=async (req,res)=>{
    try{
    const task=await Task.create(req.body)
    res.status(201).json({task})
    } catch(error){
        res.status(500).json({msg:error})
    }
}

const getTasks=async (req,res)=>{
    try{
        const{id:taskID}=req.params
        const task=await Task.findOne({_id:taskID});
        if(!task){
            return res.status(404).json({msg:`NO task with ID:${taskID}`})
        }
        res.status(200).json({task})
    }catch(error){
        res.status(500).json({msg:error})
    }
}

const updateTasks=async (req,res)=>{
    try{
        const{id:taskID}=req.params
        const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true
        })
        if(!task){
            return res.status(404).json({msg:`NO task with ID:${taskID}`})
        }
        res.status(200).json({task})
    }catch(error){
        res.status(500).json({msg:error})
    }
}

const deleteTasks=async (req,res)=>{
    try{
        const{id:taskID}=req.params
        const task=await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`NO task with ID:${taskID}`})
        }
        res.status(200).json({task})
    }catch(error){
        res.status(500).json({msg:error})
    }
}

module.exports= {
    getAllTasks,createTasks,getTasks,updateTasks,deleteTasks
}
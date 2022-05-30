const Users = require('../model/user.model');

const addUser = async(req, res) =>{
    try {
            await Users.create(req.body);
            res.status(201).json({message: 'User Added Successful'});
        
    } catch (error) {
        console.log(error.message)
    }
}

const FindAllUser = async(req, res) =>{
    try {
        
        const data = await Users.find();
        res.status(201).json(data); 
    } catch (error) {
        console.log(error.message);
    }
}

const FindSingleUser = async(req, res) =>{
    try {
        const data = await Users.findOne({_id: req.params.id});
        res.status(201).json(data);
    } catch (error) {
        console.log(error.message);
    }
}

const UpdateUser = async(req, res) =>{
    try {
        const data = await Users.findOneAndUpdate({_id: req.params.id});
        res.status(201).json(data);
    } catch (error) {
        console.log(error.message);
    }
}

const DeleteUser = async(req, res) =>{
    try {
        await Users.findOneAndDelete({_id: req.params.id});
        res.status(201).json({message: 'User Deleted Successful'});
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    addUser,
    FindAllUser,
    FindSingleUser,
    UpdateUser,
    DeleteUser
};
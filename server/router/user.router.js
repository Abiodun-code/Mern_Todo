const express  =  require('express');
const { addUser, FindAllUser, FindSingleUser, UpdateUser, DeleteUser } = require('../controller/user.controller');

const router = express.Router();

// Find All User
router.get('/users', FindAllUser);

// Find Single User
router.get('/users/:id', FindSingleUser);

// Add User
router.post('/users', addUser);

// Add User
router.put('/users/:id', UpdateUser);

// Delete User
router.delete('/users/:id', DeleteUser);


module.exports =  router;
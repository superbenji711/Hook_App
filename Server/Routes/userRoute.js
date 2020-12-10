const userController = require('../controllers/userController.js');
// const express = require() 'express';
const express = require('express');

const userRouter = express.Router();



userRouter.get('/:_id', userController.readById);
userRouter.get('/', userController.read);


userRouter.post('/', userController.create);

userRouter.put('/:_id', userController.update); //update by id

userRouter.delete('/:_id', userController.remove); //delete by id



// export default userRouter;

module.exports = userRouter;
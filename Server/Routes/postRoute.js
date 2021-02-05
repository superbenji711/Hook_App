const postController = require('../controllers/postController.js');
const express = require('express');

const postRouter = express.Router();



// postRouter.get('/:_id', postController.readById);
// postRouter.get('/', postController.read);


postRouter.post('/', postController.create);

// postRouter.put('/:_id', postController.update);

// postRouter.delete('/:_id', postController.remove);

module.exports = postRouter;
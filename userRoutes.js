const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:id', userController.getUser);       // GET /users/:id
router.put('/:id', userController.updateUser);    // PUT /users/:id

module.exports = router;

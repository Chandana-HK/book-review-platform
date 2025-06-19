const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Example route
router.get('/', reviewController.getReviews);

module.exports = router;


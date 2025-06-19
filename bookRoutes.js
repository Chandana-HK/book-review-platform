const express = require('express');
const router = express.Router();

const books = [
  { _id: 1, title: 'Test Book 1', author: 'Author A' },
  { _id: 2, title: 'Test Book 2', author: 'Author B' },
];

// GET /api/books
router.get('/', async (req, res) => {
  res.json(books);
});

module.exports = router;

const { Router } = require('express');
const Book = require('../models/book');
const router = Router();
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await Book.getBookById(id);
  res.json(response);
});
router.get('/', async (req, res) => {
  const response = await Book.getAll();
  res.json(response);
});
module.exports = router;

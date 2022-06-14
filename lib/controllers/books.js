const { Router } = require('express');
const Book = require('../models/book');
const router = Router();
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await Book.getBookById(id);
    res.json(response);
  } catch (error) {
    console.error(error.message);
    next();
  }
});
router.get('/', async (req, res, next) => {
  try {
    const response = await Book.getAll();
    res.json(response);
  } catch (error) {
    console.error(error.message);
    next();
  }
});
module.exports = router;

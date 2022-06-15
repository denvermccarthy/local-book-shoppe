const { Router } = require('express');
const Book = require('../models/book');
const router = Router();

router.post('/', async (req, res, next) => {
  try {
    const { body } = req;
    const response = await Book.insert(body);
    res.json(response);
  } catch (error) {
    next();
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await Book.getBookById(id);
    res.json(response);
  } catch (error) {
    next();
  }
});
router.get('/', async (req, res, next) => {
  try {
    const response = await Book.getAll();
    res.json(response);
  } catch (error) {
    next();
  }
});
module.exports = router;

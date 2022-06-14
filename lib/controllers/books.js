const { Router } = require('express');
const Book = require('../models/book');

module.exports = Router().get('/', async (req, res) => {
  const response = await Book.getAll();
  res.json(response);
});

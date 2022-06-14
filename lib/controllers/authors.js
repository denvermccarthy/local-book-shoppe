const { Router } = require('express');
const router = Router();
const Author = require('../models/author');

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await Author.getAuthorById(id);
    res.json(response);
  } catch (error) {
    next();
  }
});
router.get('/', async (req, res, next) => {
  try {
    const response = await Author.getAll();
    res.json(response);
  } catch (error) {
    next();
  }
});
module.exports = router;

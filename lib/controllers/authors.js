const { Router } = require('express');
const router = Router();
const Author = require('../models/author');
router.get('/', async (req, res, next) => {
  try {
    const response = await Author.getAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
    next();
  }
});
module.exports = router;

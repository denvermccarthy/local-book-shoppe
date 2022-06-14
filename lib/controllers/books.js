const { Router } = require('express');

module.exports = Router().get('/', async (req, res) => {
  res.json([1, 2, 3, 4, 5]);
});

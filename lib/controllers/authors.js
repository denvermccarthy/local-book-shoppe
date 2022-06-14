const { Router } = require('express');
const router = Router();
router.get('/', async (req, res, next) => {
  try {
    res.json(['sample']);
  } catch (error) {
    console.log(error.message);
  }
});
module.exports = router;

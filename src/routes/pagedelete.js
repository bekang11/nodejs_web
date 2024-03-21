const express = require('express');
const router = express.Router();

const pageDeleteController = require('../app/controllers/PageDeleteController');

router.use('/:slug', pageDeleteController.show);
router.use('/', pageDeleteController.index);

module.exports = router;
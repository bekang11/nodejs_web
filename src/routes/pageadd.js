const express = require('express');
const router = express.Router();

const pageAddController = require('../app/controllers/PageAddController');

router.use('/:slug', pageAddController.show);
router.use('/', pageAddController.index);

module.exports = router;
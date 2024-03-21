const express = require('express');
const router = express.Router();

const pageUpdateController = require('../app/controllers/PageUpdateController');

router.use('/:slug', pageUpdateController.show);
router.use('/', pageUpdateController.index);

module.exports = router;
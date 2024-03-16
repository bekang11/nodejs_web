const express = require('express');
const router = express.Router();

const page1Controller = require('../app/controllers/Page1Controller');

router.use('/:slug', page1Controller.show);
router.use('/', page1Controller.index);

module.exports = router;

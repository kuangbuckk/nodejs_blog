//route
const express = require('express');
const router = express.Router();

const clipController = require('../app/controllers/ClipsController');

router.get('/create', clipController.create);
router.post('/store', clipController.store);
router.get('/:slug', clipController.show);

module.exports = router;

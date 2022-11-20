const express = require('express');
const tenisController = require('../../controllers/tenisController');
const router = express.Router();

router.get('/', tenisController.getAllMatch);

router.patch('/', tenisController.updateMatch);

router.post('/', tenisController.createMatch);

module.exports = router;
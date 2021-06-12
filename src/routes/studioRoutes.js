const express = require('express');
const controller = require('../controllers/studioController')
const router = express.Router();



router.post('/', controller.createStudio);

router.get('/', controller.getAll);

router.patch('/:id', controller.updateStudio);

router.delete('/:id', controller.remove);

module.exports = router;
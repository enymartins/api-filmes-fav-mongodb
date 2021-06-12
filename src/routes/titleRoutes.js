const express = require('express');
const controller = require('../controllers/titleController');
const router = express.Router();

router.post('/', controller.createTitle);

router.get('/', controller.getAll);

router.get('/marvel', controller.getTitleMarvel);
router.get('/ghibli', controller.getTitleGhibli);
router.get('/pixar', controller.getTitlePixar);

router.patch('/:id', controller.updateTitle);
router.delete('/:id', controller.remove);


module.exports = router;
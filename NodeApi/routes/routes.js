const express = require('express');
const controllers = require('../controllers/controllers');

const router = express.Router();

router.get('/', controllers.getRecords);
router.post('/searchRecords', controllers.searchRecords);
router.post('/postNewStudent', controllers.postNewStudent);
router.patch('/postUpdatedStudent', controllers.postUpdatedStudent);
router.delete('/deleteStudent/:id', controllers.deleteStudent);

module.exports = router;
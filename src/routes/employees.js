const express = require('express');
const router = express.Router();

const employeesController = require('../controllers/employeesController');


router.get('/', employeesController.list);
router.post('/add', employeesController.save);
router.get('/delete/:id', employeesController.delete);
router.get('/update/:id', employeesController.edit);


module.exports = router;
const express = require('express');
const router = express.Router();

const employeesController = require('../controllers/employeesController');


router.get('/', employeesController.list);
router.post('/add', employeesController.save);


module.exports = router;
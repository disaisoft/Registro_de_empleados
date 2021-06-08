const express = require('express');
const router = express.Router();

const employeesController = require('../controllers/employeesController');


router.get('/', employeesController.list);

module.exports = router;
const express = require('express');
const router = express.Router();



//Routes
router.get('/contacto', (req, res) => {
    res.send('CONTACTO');
})


module.exports = router;
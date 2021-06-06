const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use('/', require('./routers/router'));

app.listen(5000, () => {
    console.log('SERVER Corriendo en  http://localhost:5000');
});
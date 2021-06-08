const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const MyConnection = require('express-myconnection');

const app = express();

//importing routes
const employeesRoutes = require('./routes/employees');

//settings 
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares "funciones que se ejecutan antes de que vengan las peticiones del usuario."
app.use(morgan('dev'));
app.use(MyConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'employees'
}, 'single'));

//routes
app.use('/', employeesRoutes);


//statics Files
app.use(express.static(path.join(__dirname, 'public')));


//Starting the server
app.listen(app.get('port'), () => {
    console.log('Servidor Funcionando En El Puerto 3000');
});
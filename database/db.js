var mysql = require('mysql');

var conexion= mysql.createConnection({
    host : 'localhost',
    database : 'registrodeempleados',
    user : 'root',
    password : 'root',
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});

conexion.query('SELECT * FROM registrodeempleados', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});


connection.end();

const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM employees', (err, employees) => {
            if (err) {
                res.json('err');
            }
           console.log(employees);
           res.render('employees');
        });
    });
};

//Funcion para guardar los datos del formulario
controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO employees set ?', [data], (err, employees) => {
            console.log(employees);
            res.send('funciona!')
        })
    })
};

module.exports = controller;
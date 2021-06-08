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

//Funcion para guardar los datos del formulario en la bd
controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO employees set ?', [data], (err, employees) => {
            res.redirect('/');
        });
    })
};

//Funcion para editar los datos del formulario en la bd
controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM employees WHERE id = ?', [id], (err, employees) => {
            res.render('employees_edit', {
                data: employees[0]
            });
        });
    });
};


//Funcion para eliminar los datos del formulario en la bd
controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM employees WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    })
};

module.exports = controller;
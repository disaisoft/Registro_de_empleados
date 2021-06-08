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

module.exports = controller;
// vars

const inquirer = require('inquirer');
const mySql = require('mysql2');
const consoleTable = require('console.table');

// database connection

const db = mySql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: 'kankanrr',
    database: 'employee_db'
});

// connecting

db.connect(function(err) {
    if (err) throw err
    console.log('Connected to employee_db')
    promptUser();
});

// promptUser function

function promptUser() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Now viewing employee database...',
            name: 'choice',
            choices: [
                "Show All Employees",
                "Show All Roles",
                "Show All Departments",
                "Update An Employee",
                "Add An Employee",
                "Add A Role",
                "Add A Department"
            ]
        }
    ]).then(function(val) {
        switch (val.choice) {
            case "Show All Employees":
                showEmployees();
            break;

            case "Show All Roles":
                showRoles();
            break;

            case "Show All Departments":
                showDepartments();
            break;

            case "Update An Employee":
                updateEmployee();
            break;

            case "Add An Employee":
                addEmployee();
            break;

            case "Add A Role":
                addRole();
            break;

            case "Add A Department":
                addDepartment();
            break;
        }
    })
}
// vars

const inquirer = require("inquirer");
const mySql = require("mysql2");
const consoleTable = require("console.table");

// database connection

const db = mySql.createConnection({
  host: "localhost",
  port: 3001,
  user: "root",
  password: "kankanrr",
  database: "employee_db",
});

// connecting

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to employee_db");
  promptUser();
});

// promptUser function

function promptUser() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Now viewing employee database...",
        name: "choice",
        choices: [
          "Show All Employees",
          "Show All Roles",
          "Show All Departments",
          "Update An Employee",
          "Add An Employee",
          "Add A Role",
          "Add A Department",
        ],
      },
    ])
    .then(function (val) {
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
    });
}

// ==== [View all Employees] ====

function viewAllEmployees() {
  db.query(
    "SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      startPrompt();
    }
  );
}

//  ==== [View all Departments] ====

function viewAllDepartments() {
  db.query(
    "SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id;",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      startPrompt();
    }
  );
}

// adds role option in tracker

var roleArr = [];
function selectRole() {
  db.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      roleArr.push(res[i].title);
    }
  });
  return roleArr;
}

// ==== [Manager Selection] ====

var managersArr = [];
function selectManager() {
  db.query(
    "SELECT first_name, last_name FROM employee WHERE manager_id IS NULL",
    function (err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        managersArr.push(res[i].first_name);
      }
    }
  );
  return managersArr;
}

// ==== [Add Employee] ====

function addEmployee() {
  inquirer
    .prompt([
      {
        name: "firstname",
        type: "input",
        message: "Enter their first name ",
      },
      {
        name: "lastname",
        type: "input",
        message: "Enter their last name ",
      },
      {
        name: "role",
        type: "list",
        message: "What is their role? ",
        choices: selectRole(),
      },
      {
        name: "choice",
        type: "rawlist",
        message: "Whats their managers name?",
        choices: selectManager(),
      },
    ])
    .then(function (val) {
      var roleId = selectRole().indexOf(val.role) + 1;
      var managerId = selectManager().indexOf(val.choice) + 1;
      db.query(
        "INSERT INTO employee SET ?",
        {
          first_name: val.firstName,
          last_name: val.lastName,
          manager_id: managerId,
          role_id: roleId,
        },
        function (err) {
          if (err) throw err;
          console.table(val);
          startPrompt();
        }
      );
    });
}

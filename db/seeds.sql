
INSERT INTO department (name)
VALUE ("Sales");
INSERT INTO department (name)
VALUE ("Engineering");
INSERT INTO department (name)
VALUE ("Finance");
INSERT INTO department (name)
VALUE ("Legal");

INSERT INTO role (title, salary, department_id)
VALUE ("Software Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Legal Team Lead", 250000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Sales", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Financial Advisor", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Software Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Keandrian", "Jones", null, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Soji", "Tendou", null, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Aruto", "Hiden", null,3 );
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Ace", "Ukiyo", 1, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Haruka", "Mizusawa", 4, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Kazuma", "Kenzaki", 1, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Sakuya", "Tachibana", 2, 7);
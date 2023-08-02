# Employee Tracker

## What it does ?

This app is a command-line interface using Node JS where a user can select from menu options to display sample employee data and conduct some updates. This app comes with pre-seeded data to play around with.

### Features

- View all Employees
- View all Roles
- View all Depts
- Update an employee's info
- Add an Employee
- Add a Role
- Add a Dept

## How to use it ?

1. Clone the repo using `git clone`
2. Open your terminal and run a `npm i`
3. Then run `mysql -u root -p` to log into mysql
4. In mysql run `source db/schema.sql` and `source db/seeds.sql` (this is assuming you are in the root and have not cd'd into your db directory)
5. To start the app run `node index` in your terminal
6. Play around with the tracker

> Using `ctrl + c` will quit the app if needed.

## Demo

Video Guide: https://drive.google.com/file/d/1qEYg1kvJpI8Bzny6MuZPyuT9eaksmEFv/view?usp=sharing

Screenshot:

![tracker screenshot](./images/trackershot.png)

## Credits

Sameer Mirza | Columbia Coding Bootcamp

// index.js by Jack Loveday

// Link to HTML Creation
const generateHTML = require('./src/generateHTML');

// Team Profile Classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Import Node Modules
const fs = require('fs');
const inquirer = require('inquirer');

// Initialize Team Array & Globals
const teamArray = [];


// Manager Inquirer Prompts
const addManager = () => {
    return inquirer.prompt([
        // Set up Inquirer Prompts
        {
            // Manager Name Prompt
            type: 'input',
            name: 'name',
            message: 'Enter the Team Managers Name:',
            validate: input => {
                if (!input) return 'Please enter a valid First & Last Name.';
                let valid = input.match(/^[a-zA-Z]+ [a-zA-Z]+$/g);
                if (valid) return true;
                return 'Please enter a valid Full Name.';
            }
        },
        {
            // Manager ID Prompt
            type: 'input',
            name: 'id',
            message: 'Enter the Managers ID:',
            validate: input => {
                if (!input) return 'ID must exist.';
                if (isNaN(input)) return 'ID must be a number.';
                let valid = input.match(/^([+-]?[1-9]\d*|0)$/);
                if (!valid) return 'ID must be an integer.';
                return true;
            }
        },
        {
            // Manager Email Prompt
            type: 'input',
            name: 'email',
            message: 'Enter the Managers Email:',
            validate: email => {
                let valid = email.match(/\S+@\S+\.\S+/g);
                if (valid) return true;
                return 'Enter a valid Email Address.';
            }
        },
        {
            // Manager Office Number
            type: 'input',
            name: 'officeNumber',
            message: 'Enter the Office Number:',
            validate: input => {
                if (!input) return 'ID must exist.';
                if (isNaN(input)) return 'ID must be a number.';
                let valid = input.match(/^([+-]?[1-9]\d*|0)$/);
                if (!valid) return 'ID must be an integer.';
                return true;
            }
        }
    ])
        .then(managerInput => {
            // Then, let's create the Manager from our input
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            // Add it to our Team Array
            teamArray.push(manager);
        })
};


// Employee Inquirer Prompts
const addEmployee = () => {
    return inquirer.prompt([
        {
            // Choose the Employee Type/Role
            type: 'list',
            name: 'role',
            message: 'Choose the Employee Role:',
            choices: ['Engineer', 'Intern']
        },
        {
            // Employee Name Prompt
            type: 'input',
            name: 'name',
            message: 'Enter the Employees Name:',
            validate: input => {
                if (!input) return 'Please enter a valid First & Last Name.';
                let valid = input.match(/^[a-zA-Z]+ [a-zA-Z]+$/g);
                if (valid) return true;
                return 'Please enter a valid Full Name.';
            }
        },
        {
            // Employee ID Prompt
            type: 'input',
            name: 'id',
            message: 'Enter the Employee ID:',
            validate: input => {
                if (!input) return 'ID must exist.';
                if (isNaN(input)) return 'ID must be a number.';
                let valid = input.match(/^([+-]?[1-9]\d*|0)$/);
                if (!valid) return 'ID must be an integer.';
                return true;
            }
        },
        {
            // Employee Email Prompt
            type: 'input',
            name: 'email',
            message: 'Enter the Employees Email:',
            validate: email => {
                let valid = email.match(/\S+@\S+\.\S+/g);
                if (valid) return true;
                return 'Enter a valid Email Address.';
            }
        },
        {
            // Intern's School Prompt
            type: 'input',
            name: 'school',
            message: 'Enter the Interns School Name:',
            when: (input) => input.role === 'Intern',
            validate: input => {
                if (input) return true;
                return 'Please enter a valid Name.';
            }
        },
        {
            // Engineer's Github Prompt
            type: 'input',
            name: 'github',
            message: 'Enter the Employees Github Username:',
            when: (input) => input.role === 'Engineer',
            validate: github => {
                if (github) return true;
                return 'Enter a valid Github Username.';
            }
        },
        {
            // Ask User if they want to add additional Team Members
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another Team Member?',
            default: false
        }
    ])
        .then(employeeData => {
            // Create the Employee from Input
            let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
            let employee;

            // Check if its either an Engineer, or Intern, and create new
            if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github);
            } else if (role === 'Intern') {
                employee = new Intern(name, id, email, school);
            }

            // Push to Team Array
            teamArray.push(employee);

            // If we confirmed adding another...
            if (confirmAddEmployee) return addEmployee(teamArray);
            return teamArray;
        })
}


// Function to write our HTML page
const writeFile = (data) => {
    fs.writeFile('./dist/index.html', data, err => {
        // Check for Error
        if (err) { console.log(err); return; }
        console.log('Team Profile has been created.');
    })
}

// Call Manager Prompts here
addManager()
    .then(addEmployee)
    .then(teamArray => { return generateHTML(teamArray) })
    .then(pageHTML => { return writeFile(pageHTML) })
    .catch(err => { console.log(err) });
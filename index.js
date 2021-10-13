// index.js by Jack Loveday

// Link to HTML Creation
const generateHTML = require();

// Team Profile Classes
const Manager = require();
const Engineer = require();
const Intern = require();

// Import Node Modules
const fs = require('fs');
const inquirer = require('inquirer');

// Initialize Team Array
const teamArray = [];

// Add Manager Prompts here
//
//

// Add Employee Prompts here
//
//

// Function to write our HTML page
const writeFile = (data) => {
    fs.writeFile('', data, err => {
        // Check for Error
        if (err) { console.log(err); return; }
        console.log('Team Profile has been created.');
    })
}

// Call Manager Prompts here
//
//
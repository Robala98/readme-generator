// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Project Name: ',
    name: "title"
  },
  {
    type: 'input',
    message: 'Description: ',
    name: 'desc'
  },
  {
    type: 'input',
    message: 'Usage: ',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'Installation: ',
    name: 'install'
  },
  {
    type: 'input',
    message: 'Contributions: ',
    name: 'contribute'
  },
  {
    type: 'input',
    message: 'Tests: ',
    name: 'test'
  },
  {
    type: 'input',
    message: 'License: ',
    name: 'license'
  },
  {
    type: 'input',
    message: 'GitHub',
    name: 'username'
  },
  {
    type: 'input',
    message: 'Email: ',
    name: 'email'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('README.md, data')

}

// TODO: Create a function to initialize app
function start() {

  inquirer.prompt(questions)
  
  .then ((data) => writeToFile('README.md', generateMarkdown(data)))
};

// Function call to initialize app


start();


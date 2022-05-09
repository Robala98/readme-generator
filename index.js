const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

function init(){
inquirer.prompt([
    
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'title',
    },
    
    {
      type: 'input',
      message: 'Give a brief description of your project:',
      name: 'description',
    },
    
    {
      type: 'input',
      message: 'Give directions on how to use your project:',
      name: 'usage',
    },
    
    {
        type: 'input',
        message: 'Instructions for installation?',
        name: 'installation',
      },
      
    {
        type:'list',
        message: 'What license if any will you be using?',
        name:'license',
        choices:[
            'Apache',
            'MIT',
            'Mozilla',
            'NONE'
        ]
      },
      
      {
        type: 'input',
        message: 'Any other contributers?',
        name: 'contributions',
      },
      {
        type: 'input',
        message: 'Is there any testing implemented?',
        name: 'test',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Enter your github username:',
        name: 'github',
      },
      
      
  ])
  .then((response) => {

    fs.writeFileSync('README.md', generateMarkdown(response))
    
  })
}
// Function call to initialize app
init();
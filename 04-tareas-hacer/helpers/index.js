const inquirer = require('inquirer');

inquirer.prompt({
    name: 'color',
    message: 'What is your favorite color?',
    default: 'blue'
})
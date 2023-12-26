
const inquirer = require('inquirer');

const questions = 
[
    {
        name: 'characters',
        type: 'input',
        message: 'enter 1 to 3 characters',
        // @TODO: validate proper characters
        validate: ''
    },
    {
        name: 'color',
        type: 'input',
        message: 'enter either a hexadecimal code, or a color keyword:'
    },
];


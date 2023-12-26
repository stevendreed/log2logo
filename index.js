
const inquirer = require('inquirer');
const { writeToFile } = require('./utils/writeToFile');

const questions = 
[
    {
        name: 'characters',
        type: 'input',
        message: 'enter 1 to 3 characters:',
        // @TODO: validate proper characters
        // validate: () => {console.log('tested!')}
    },
    {
        name: 'shape',
        type: 'list',
        message: 'choose a shape:',
        choices: ['triangle', 'square', 'circle']
    },
    {
        name: 'color',
        type: 'input',
        message: 'enter either a hexadecimal code, or a color keyword:'
    },
];

function app()
{
    inquirer
        .prompt(questions)
        .then(answers =>
            {
                console.log({...answers});
            }) // end then
        .catch(err =>
            {
                console.log(`something went wrong generating answers: ${err}`);
            }); // end catch
} // end app

// invoke app
app();
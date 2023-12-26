
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

function app()
{
    inquirer
        .createPromptModule(questions)
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
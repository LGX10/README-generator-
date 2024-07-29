// TODO: Include packages needed for this application
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = inquirer.prompt = ([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },

    {
        type: 'input',
        name: 'title',
        message: 'Write your description here!',
    }

    {
        type: 'input',
        name: 'title',
        message: 'Write your install instructions here!',
    }

    {
        type: 'input',
        name: 'title',
        message: 'Write your usage instructions here!',
    }

    {
        type: 'input',
        name: 'title',
        message: 'Write your credits here!',
    }

    {
        type: 'list',
        name: 'title',
        message: 'Select a liscense!',
        name: 'liscense',
        choices: ['red', 'blue', 'green', 'yellow', 'cyan', 'magenta'],
    }

    {
      

    }
    // Add more questions here
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

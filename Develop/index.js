// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
const generateMarkdown = require("./utils/generateMarkdown");



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Write your description here!',
    }

    {
        type: 'input',
        name: 'install',
        message: 'Write your install instructions here!',
    }

    {
        type: 'input',
        name: 'usage',
        message: 'Write your usage instructions here!',
    }

    {
        type: 'input',
        name: 'credits',
        message: 'Write your credits here!',
    }

    {
        type: 'checkbox',
        message: 'Select a liscense!',
        name: 'liscense',
        choices: ['Apache liscense 2.0', 'MIT Liscense', 'Creative Commons Zero v.10 Universal ', 'Mozilla Public Liscense 2.0', 'Eclipse Public Liscense 2.0', 'Boost Software Liscense 1.0'],
    }
    // Add more questions here
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
 }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Creating Professional README.md File...");
      writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
  }

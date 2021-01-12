// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeToFile);

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type:"input",
            name: "title",
            message: "What is the title of this project?"
        },
        {
            type:"input",
            name: "description",
            message: "Enter a description for your project."
        },
        {
            type:"input",
            name: "installation",
            message: "Enter installation instructions."
        },
        {
            type:"input",
            name: "usage",
            message: "Enter instructions and examples."
        },
        {
            type:"input",
            name: "screenshots",
            message: "Enter any screenshots using format '![imagetitle](filepathforimage.png)' ."
        },
        {
            type:"input",
            name: "credits",
            message: "If applicable, enter any credits for this project."
        },
        {
            type:"input",
            name: "contributing",
            message: "If applicable, enter any contributing guidelines."
        },
        {
            type:"input",
            name: "tests",
            message: "If applicable, enter developed tests for your program and then provide examples on how to run them."
        },
        {
            type:"input",
            name: "email",
            message: "Enter email for those with questions to reach you at."
        },
        {
            type:"input",
            name: "github",
            message: "Enter Github username."
        },
        {
            type:"input",
            name: "questions",
            message: "If applicable, enter any further instructions for contacting you with questions."
        },
        {
            type:"list",
            name: "license",
            message: "Please choose a license for your project.",
            choices:["MIT", "GPLv2", "Apache", "GPLv3", "BSD 3-clause", "Unlicense"] 
        },
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const inquirer = require('inquirer');
const fs = require ('fs');
const axios = require('axios');
const generatorMarkdown = require("./utils/generateMarkdown");
const api = require('./utils/api');

inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your github email?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your Project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Describe your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required for Installation of your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions for your project',
    },
    {
        type: 'list',
        name: 'license',
        choices:[
            "MIT",
            "GVL-GPL 3.0",
            "APACHE 2.0",
            "BSD 3",
            "None",
        ]
    },
    {
        type:'input',
        name: 'contributors',
        message:'Who helped contribute?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test your project?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Contact information for any further questions',
    }


]);
// .then(answers => {
//     fs.writeFile(`${answers.title}.json`, JSON.stringify(answers, null, 2), (err) => {
//         if (err) {
//             throw new Error(err);

//         }
//         console.log('created ReadMe of' + fileName);
//     });
// });

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err){
        if (err) {
            throw new Error(err);
        }
        console.log('created' + fileName);
    })
}

function init() {
    inquirer.prompt(questions)
    .then(function (gitData) {
        writeToFile("README.md", generatorMarkdown(data,gitData));
        console.log(gitData);
        console.log(data);
    })

}

init();

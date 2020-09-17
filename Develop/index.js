const inquirer = require('inquirer');
const fs = require ('fs');
const axios = require('axios');
const generatorMarkdown = require("./utils/generateMarkdown");

const questions = [
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
        name: 'description',
        message: 'Describe your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What dependencies are required for Installation of your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'This applications is used for..',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project have?',
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
        name: 'tests',
        message: 'What command needs to be run to test your project?',
    }

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
      if (err) {
        throw new Error(err);
      }
      console.log('Success! Created:' + fileName );
    })
  }
  

function init() {
    inquirer.prompt(questions)
    .then(function(data){
        axios.get(`https://api.github.com/users/${data.UserName}`)
    .then(function (gitData) {
        writeToFile("README.md", generatorMarkdown(data,gitData));
        console.log(gitData);
        console.log(data);
    })

  })

}

init();

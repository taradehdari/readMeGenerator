const inquirer = require('inquirer');
const fs = require ('fs');
inquirer.prompt([
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
        name: 'Installation',
        message: 'What are the steps required for Installation of your project',
    },
    {
        type: 'input',
        name: 'Usage',
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
        name: 'Questions',
        message: 'Contact information for any further questions',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your github email?'
    }
    

]).then(answers => {
    fs.writeFile(`${answers.title}.json`, JSON.stringify(answers, null, 2), (err) => {
        if (err) {
            throw new Error(err);

        }
        console.log('created ReadME');
    });
});

function writeToFile(fileName, data) {
}

function init() {

}

init();

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

inquirer
    .prompt([{
            type: 'input',
            name: 'title',
            message: 'What is your project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation information:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information:'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please provide contributing information:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide testing information:'
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please provide your github username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email:'
        }
    ])
    .then(answers => {
        const text = writeText(answers);
        return writeFileAsync(`${answers.title}.md`, text);

    })
    .then(answers => {
        console.log('Your README has been created.');
    })
    .catch(error => {
        console.log(error);
    });

function writeText(answers) {
    return `
        # ${answers.title}
        ### ${answers.description}
        ##Table of Contents
            ####*[Installation](##Installation)
            ####*[Usage](##Usage)
            ####*[License](##License)
            ####*[Contributing](##Contributing)
            ####*[Tests](##Tests)
            ####*[Questions](##Questions)

        ##Installation
        ${answers.installation}
        ##Usage
        ${answers.usage}
        ##License
        ##Contributing
        ${answers.contributing}
        ##Tests
        ${answers.tests}
        ##Questions
        #### Github Profile
        **[${answers.username}](https://github.com/${answers.username})**
        #### Please submit questions to:
        ***<${answers.email}>***
        `
}
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
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What type of license do you have?',
            choices: [
                { name: 'Apache 2.0', value: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', checked: false },
                { name: 'Boost Software 1.0', value: '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)', checked: false },
                { name: 'The MIT', value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', checked: false },
                { name: 'Eclipse Public License 1.0', value: '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)', checked: false },
                { name: 'Other', value: 'Coming Soon', checked: false },
                { name: 'No License', value: 'No License', checked: false },
            ]
        }
    ])
    .then(answers => {
        const text = writeText(answers);
        return writeFileAsync('README.md', text);
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
        ##${answers.license}                  
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
        ${answers.license}
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
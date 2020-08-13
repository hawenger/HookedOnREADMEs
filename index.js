const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

inquirer
    .prompt([{
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    }])
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
   `;
}
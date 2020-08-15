class Question {
    constructor(type, name, message) {
        this.type = type;
        this.name = name;
        this.message = message;
    }
    displayQuestion() {
        Question.foreach() {
            [{
                return this.type,
                this.name,
                this.message
            }]
        }
        inquirer
            .prompt([{
                displayQuestion()
            }])

    };
}
const title = new Question('input', 'title', 'What is your project title?');
//const title = new Question('input', 'description', 'What is your project title?');
//const title = new Question('input', 'installation', 'What is your project title?');
//const title = new Question('input', 'usage', 'What is your project title?');
//const title = new Question('input', 'contributing', 'What is your project title?');
//const title = new Question('input', 'questions', 'What is your project title?');

//            type: 'checkbox',
//name: 'license',
//message: 'What type of license do you have?',
//choices: [
//{ name: 'Apache 2.0', value: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', checked: false },
//{ name: 'Boost Software 1.0', value: '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)', checked: false },
//{ name: 'The MIT', value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', checked: false },
//{ name: 'Eclipse Public License 1.0', value: '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)', checked: false },
//{ name: 'Other', value: 'Coming Soon', checked: false },
//{ name: 'No License', value: 'No License', checked: false },
//]
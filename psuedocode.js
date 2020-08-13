, {
    type: 'input',
    name: 'description',
    message: 'Please describe your project'
}, {
    type: 'checkbox',
    name: 'tableOfContents',
    message: 'What do you want to include in your README?',
    choices: [
        { name: 'Installation', value: true, checked: true },
        { name: 'Usage', value: true, checked: true },
        { name: 'License', value: true, checked: true },
        { name: 'Contributing', value: true, checked: true },
        { name: 'Tests', value: true, checked: true },
        { name: 'Questions', value: true, checked: true },
    ]
}]);
if (checked.true) {
    const name = new Question(true);

    class Question {
        constructor(checked) {
            this.checked = true;
        }
        displayQuestion() {
                inquirer
                    .prompt([{
                                type: 'input',
                                name: Question(true),
                                message: $ { `Please enter ${Question} information` }

                                function generateReadme(answers) {
                                    return;
                                    const readme = generateReadme(answers);
                                }
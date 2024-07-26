#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Define a function to start the game
function startGame() {
    console.log(chalk.magentaBright("\t \t \tWelcome to the Adventure Game!\n"));
    // Ask the player for their name
    inquirer.prompt({
        type: 'input',
        name: 'playerName',
        message: 'What is your name?',
        validate: (input) => {
            return input !== '' ? true : 'Please enter your name.';
        }
    }).then((answers) => {
        const playerName = answers['playerName'];
        console.log(chalk.blueBright(`\t \t \t Welcome, ${playerName}! Let's begin.\n`));
        explore();
    });
}
function explore() {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        message: chalk.green('What do you want to do?'),
        choices: ['Fight the dragon', 'Open the treasure chest', 'Run away']
    }).then((answers) => {
        const action = answers['action'];
        if (action === 'Fight the dragon') {
            console.log('You fought bravely, but the dragon defeated you.');
        }
        else if (action === 'Open the treasure chest') {
            console.log('You found a treasure chest full of gold! You win!');
        }
        else if (action === 'Run away') {
            console.log('You ran away from danger. Better luck next time.');
        }
        inquirer.prompt({
            type: 'confirm',
            name: 'playAgain',
            message: chalk.yellowBright('Do you want to play again?')
        }).then((answers) => {
            const playAgain = answers['playAgain'];
            if (playAgain) {
                console.log(chalk.blue('\n \t \t \t Starting a new adventure...\n'));
                explore();
            }
            else {
                console.log(chalk.bgGreenBright('\t \t \tThanks for playing!'));
            }
        });
    });
}
startGame();

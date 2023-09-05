import { argv } from 'node:process';
import chalk from 'chalk';
import * as colornames from 'colornames';
import * as randomHex from 'random-hex';

// get user input
const userInputGeneral = argv;
const userInput = argv[2];

if (userInput) {
  if (userInputGeneral.length === 3 && userInputGeneral !== 'ask') {
    // generate on userinput
    const color = colornames.get(userInput);

    const hexColorUserInput = color.value;
    const hexColorStringUserInput = `${hexColorUserInput}`;

    const textUserInput = `###############################
###############################
###############################
####                       ####
####       ${hexColorUserInput}         ####
####                       ####
###############################
###############################
###############################`;

    const colorForTextUserInput = chalk.hex(hexColorStringUserInput);
    console.log(colorForTextUserInput(textUserInput));
  } else if (userInputGeneral.length > 3) {
    console.log(
      'Wrong format. Please input colors in the following format: luminosity+color, e.g. darkred',
    );
  } else {

  /*
  // ask - doesnt work
  else if (userInput === 'ask') {
    console.log(
      'What color and luminosity would you like? Enter it in the following format: luminosity+color, e.g. darkred',
    );
  }
  */
    console.log(
      'This color is not in our library. Please input colors in the following format: luminosity+color, e.g. darkred',
    );
  }
} else {
  // generate random
  const hexColorRandom = randomHex.generate();
  const hexColorStringRandom = `${hexColorRandom}`;
  const textRandom = `###############################
###############################
###############################
####                       ####
####       ${hexColorRandom}         ####
####                       ####
###############################
###############################
###############################`;

  const colorForTextRandom = chalk.hex(hexColorStringRandom);
  console.log(colorForTextRandom(textRandom));
}

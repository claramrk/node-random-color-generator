import { argv } from 'node:process';
import chalk from 'chalk';
import * as colornames from 'colornames';
import * as randomHex from 'random-hex';
import randomColor from 'randomcolor';

// get user input
const userInputGeneral = argv;
const userInput = argv[2];
const userInputLuminosity = argv[3];

if (userInput) {
  if (userInputGeneral.length >= 3 && userInput !== 'ask') {
    // generate hex - works
    const hexColorUserInput = randomColor({
      luminosity: userInputLuminosity,
      hue: userInput,
    });

    //hashbox - works
    const textUserInput = `###############################
###############################
###############################
####                       ####
####       ${hexColorUserInput}         ####
####                       ####
###############################
###############################
###############################`;

    const colorForTextUserInput = chalk.hex(hexColorUserInput);
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
  // generate random - works!
  const hexColorRandom = randomHex.generate();
  const textRandom = `###############################
###############################
###############################
####                       ####
####       ${hexColorRandom}         ####
####                       ####
###############################
###############################
###############################`;

  const colorForTextRandom = chalk.hex(hexColorRandom);
  console.log(colorForTextRandom(textRandom));
}

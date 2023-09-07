import { argv } from 'node:process';
import chalk from 'chalk';
import * as colornames from 'colornames';
import * as randomHex from 'random-hex';
import randomColor from 'randomcolor';

// get user input
const userInputGeneral = argv;
const userInput = argv[2];
const userInputLuminosity = argv[3];

// generate random hex
const hexColorRandom = randomHex.generate();

// hex based on user input
const hexColorUserInput = randomColor({
  luminosity: userInputLuminosity,
  hue: userInput,
});

if (userInput) {
  if (
    userInputGeneral.length >= 3 &&
    userInput !== 'ask' &&
    !userInput.includes('x')
  ) {
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
  }
  // ask - doesnt work
  else if (
    userInputGeneral.length >= 3 &&
    userInput === 'ask' &&
    !userInput.includes('x')
  ) {
    console.log(
      'What color and luminosity would you like? Enter it in the following format: node index.js color + luminosity',
    );
  } else if (
    userInputGeneral.length >= 3 &&
    userInput !== 'ask' &&
    userInput.includes('x')
  ) {
    // Generate dimensions of hashbox of random color generator - doesnt really work haha
    let countColumn = 31;
    let countRow = 9;
    const hashText = `#`;
    const emptyText = ` `;
    let placeholderText = `1234567`;
    let hashtagsLineOne = ` `;
    let hashtagsLineTwo = ` `;
    const userInputX = userInput.includes('x');

    // IF USERINPUT

    if (userInputX) {
      // split the ‘X’ into first and second part with
      const userDimensions = userInput.split('x');
      countColumn = userDimensions[0];
      countRow = userDimensions[1];
    } else {
      countColumn = 31;
      countRow = 9;
    }

    const countRowThirdFloor = Math.floor(countRow / 3);
    const countRowThirdCeil = Math.ceil(countRow / 3);

    // for rows - do the first third //for columns -> create one line with ###

    for (let counterOne = 0; counterOne < countRowThirdFloor; counterOne++) {
      hashtagsLineOne = hashText.repeat(countColumn);
      const coloredHashtagsLineOne = chalk.hex(hexColorRandom)(hashtagsLineOne);
      console.log(coloredHashtagsLineOne);
    }

    // for rows - do the middle part //for columns -> create lines with # placeholder #
    for (let counterTwo = 0; counterTwo < countRowThirdFloor; counterTwo++) {
      const hashtagTextTwo = hashText.repeat(Math.floor(countColumn / 5));
      const emptyTextTwo = emptyText.repeat(Math.ceil(countColumn / 5));
      let emptyTextThree = emptyText.repeat(Math.ceil(countColumn / 5));

      if (counterTwo === Math.floor((countRowThirdCeil - 1) / 2)) {
        placeholderText = hexColorRandom;
        emptyTextThree = emptyTextThree.slice(0, emptyTextThree.length - 1);
      } else {
        placeholderText = emptyTextTwo;
      }

      const text =
        hashtagTextTwo +
        emptyTextTwo +
        placeholderText +
        emptyTextThree +
        hashtagTextTwo;

      const coloredText = chalk.hex(hexColorRandom)(text);
      console.log(coloredText);
    }

    // for rows - do the second third //for columns -> create one line with ###
    for (
      let counterThree = 0;
      counterThree < countRowThirdFloor;
      counterThree++
    ) {
      hashtagsLineTwo = hashText.repeat(countColumn);
      const coloredHashtagsLineTwo = chalk.hex(hexColorRandom)(hashtagsLineTwo);
      console.log(coloredHashtagsLineTwo);
    }
  }
} else {
  // generate random - works!
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

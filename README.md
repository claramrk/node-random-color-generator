#Node.js Random Color Generator

##Functionality

Create an application that will return a random color in the command line. It should work like this: When a user enters node index.js in the command line, a block of approximately 31x9 # characters colored with a random color (using hex code, e.g. #ff0000) should be generated.

In addition to node index.js, it should also be able to accept the request for a:

- hue (e.g. green or red or blue)
- luminosity (e.g. light or dark)

...and then generate random colors that match those choices.

Stretch goals
if a user types "ask" instead of a color name, print questions to ask the user for the name of the color and the luminosity
If a user types a size in the format of WWxHH (eg. 31x9) before the color and luminosity, it will use this as the size of the box

##Tasks
[X]Set up variable to use user input
[X]Find library with colors and hex code assigned to it
[X] write output text
[] create function for random color
[] create function for hue input
[] create function for luminosity input
[]create questions and functionality for "ask"
[]create questions and functionality for "format"

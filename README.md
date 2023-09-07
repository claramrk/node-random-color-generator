#Node.js Random Color Generator

##Functionality

- User requests node index.js --> a box with a random color is returned with the according hex code in the middle
- User requests node index.js color e.g. node index.js red --> a box in the color is returned, with the according hex code in the middle
- User requests node index.js color + luminosity e.g. node index.js red dark --> a box in the color and luminosity is created, with the according hex code in the middle
- User requests node index.js ask --> a question to ask the user for the name of the color and the luminosity is printed
- User requests node index.js WWxHH e.g. node index.js 31x9 --> the format of WWxHH (eg. 31x9) will be used as the size of the box (still buggy)

##Task
Create an application that will return a random color in the command line. It should work like this: When a user enters node index.js in the command line, a block of approximately 31x9 # characters colored with a random color (using hex code, e.g. #ff0000) should be generated.

In addition to node index.js, it should also be able to accept the request for a:

- hue (e.g. green or red or blue)
- luminosity (e.g. light or dark)

...and then generate random colors that match those choices.

Stretch goals
if a user types "ask" instead of a color name, print questions to ask the user for the name of the color and the luminosity
If a user types a size in the format of WWxHH (eg. 31x9) before the color and luminosity, it will use this as the size of the box

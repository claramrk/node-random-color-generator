# Random Color Generator CLI

## Overview

Welcome to the Random Color Generator CLI, a command-line application designed to bring random colors to your command line interface.

👷 **This project is still under construction** 👷

## Features

### Basic Functionality

- **Generate Random Color Block:**
  - Upon entering `node index.js` in the command line, a 31x9 block of # characters colored with a random hex code is generated and displayed.

- **Color Customization:**
  - Users can specify color preferences using additional arguments:
    - `node index.js hue=<color>`: Generates random colors within the specified hue (e.g., red, green, blue).
    - `node index.js luminosity=<type>`: Generates random colors with the specified luminosity (e.g., light or dark).

- **Additional Features:**
  - If a user types "ask" instead of a color name, the program prints questions to ask the user for the name of the color and the luminosity.
  - If a user types a size in the format of WWxHH (e.g., 31x9) before the color and luminosity, it will use this as the size of the box.

### Implementation

1. **Command Line Arguments:**
   - Parses command line arguments to handle requests for specific hue and luminosity.
   - Implements additional logic for user prompts and customizable box size.

2. **Color Generation:**
   - Utilizes a random color generator library to generate hex codes for the color block.

3. **Block Rendering:**
   - Implements a rendering mechanism to display a dynamically sized block of # characters with the generated color.

## How to Run

1. **Clone the Repository:**
   - `git clone <repository-url>`

2. **Navigate to the Project Directory:**
   - `cd random-color-generator-cli`

3. **Install Dependencies:**
   - `npm install`

4. **Generate Random Color Block:**
   - Run `node index.js` to generate a dynamically sized color block with a random hex code.

5. **Customize Colors:**
   - For hue customization, use `node index.js hue=<color>` (e.g., `node index.js hue=red`).
   - For luminosity customization, use `node index.js luminosity=<type>` (e.g., `node index.js luminosity=dark`).
   - For additional features, try using `node index.js ask` or specifying the box size like `node index.js 40x15 hue=blue luminosity=light`.

Feel free to explore the codebase, contribute improvements, or use it as a reference for your own projects. If you have suggestions or find ways to enhance the implementation, don't hesitate to open an issue or submit a pull request.

Happy coding!

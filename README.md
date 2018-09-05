## Hangman

This is a hangman game written in vanilla js, inspired by 2001: A Space Odyssey.

In order to run a development or production build:

1. Make sure you have node.js and npm installed.
2. Clone the project.
3. Enter the project folder and run `npm install` to install required dependencies.
4. Run `npm start` to compile a development build, this will start a development server, it is available at `http://localhost:7700/`
5. In order to compile a production build run `npm run build`, after compiling the build will be located in the `dist` folder inside the project folder.
6. This project uses fetch to get data from an external json file, to see working production build after building you need to use a server.

This project uses eslint, if you want to check the code run `npm run lint`, if there are any lint errors they will be displayed in the terminal.
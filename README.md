[Live Demo](https://upbeat-bose-8f59b4.netlify.app/)

**Object of the game**

The object of Yahtzee is to obtain the highest score from throwing 5 dice.
The game consists of 13 rounds.
In each round, you can roll the dice up to 3 times, and then score the roll in one of 13 categories.
You must score once in each category.
The score is determined by a different rule for each category.
The game ends once all 13 categories have been scored.

![Yahtzee Game](public/images/demo.gif)

## Roadmap

Unit Testing

- [x] Rules

Help/Rules section

- [x] a pause icon is to be displayed in the upper right corner
- clicking on this icon displays a page which will include :
  - [x] game rules
  - [x] the demo gif
  - [x] the scoreboard

Game End

- [x] Persist score to local storage
- [x] Disable the GameRoll button once all RuleRows are displaying a score
- [x] Provide mechanism to restart the game at any time
  - [ ] if the game is not ended, but user restarts the game, ask user to confirm the game should be restarted

Game scoreboard

- [x] a table which displays lines with pseudos, dates and the scores

File organization

- [x] re-organise files into components directory

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

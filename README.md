# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Project 2 Overview and Documentation:
## Requirements Checklist for Team
1. React application created
2. Components all rendered in react: Key components are Homepage, Quiz, Timeline, LikedPages (also NavBar and Footer)
- Note Quiz-Results is now merged with Quiz and interactive
3. Interactivity: Our Quiz page is interactive and specifically the interaction takes place in the QuizContainer file. Quiz will intake responses from the user and will give recommended search tags based on how the user responds.
4. Improved overall look of page by implemeting improved navbar and coloration, alongside minor changes made to cards and filter size slightly changed.
5. Firebase hosting: https://info340bb8.web.app/homepage
6. Entire team contributed to the draft.

## Revisions Locations Notes: 
### Content and HTML Structure (~20%)
- Footer with copyright included in Footer.js and rendered in the App.js X
- Added author and description to metadata for pages (Quiz.js, Homepage.js, LikedLocations.js, timeline.js) 

### Site Style and CSS Structure (~30%)
- Removed excess CSS files and stored style.css project.html and index.css(old) in the project-draft1 folder 
- Filter was slightly shrunk and text reformatted to be left-right rather than centered

### Accessibility (~15%)
- Ensured the card section was in line with the card sectioning format recommended by bootstrap (LocationCardList.js)


### Responsive Design
- Added viewport meta to all files (Quiz.js, Homepage.js, LikedLocations.js, timeline.js) 
- Decentralized a few text elements titles and feature content (Filter, Quiz Questions)

## General Notes:
- Ran into odd issue where HTML elements cannot be within div, doesn't impact but gives warning as a div is used to bind the app folder together. 
- Commented out code is mostly the work in progress implementation of additional interactive features


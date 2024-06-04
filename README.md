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
- The QuizContainer file has a const variable using holding the quiz objects. This is there to allow for the img question to be asked as img elements cannot be stored in the JSON. JSON functionality is also working but doesn't include Q#4. The JSON with the quiz questions is passed as a prop however the constant is used so that question 4 can be displayed. 


# FINAL PROJECT CHECKLIST/NOTES:
## Most important notes:
- If you get a firebase UI package missing error that can be solved with this npm install (npm install https://gitpkg.now.sh/gvillenave/firebaseui-web-react/dist), this was the git branch discussed in the auth lecture
- There is left over code from the Firebase user interface. It doesn't impact the features and just provides the ability to log in and see the login on the NavBar (was left in after discussion between Cole & Zach)
- There is left over filter code from a miscommunication resulting in 2 filter features being made. One (Coles) is commented out but was left in the code for future project work out that doesn't impact working filter code.

## Fixes from Last Draft: 
- Added meta tags to the index.html
- Fixed the issue of returning .map statements in QuizContainer.js and Filter.js

## General Route Map:
- Index.js
- App.js -> Navbar.js & Footer.js (and all below)
- Quiz.js -> QuizContainer.js 
- Hompage.js -> LocationCardList.js & Filter.js
- timeline.js
- About.js paramroutes -> AboutDetails.js -> LearnMore.js
- Login.js

## App Content and Html
- Project built using create-react-app in the root of the repo. Cleaned up extraneous files **React app repo cleaned**
- Specified meta data in HTML (title, author, description, and own favicon) **index.html (favicon.ico is a space needle)**
- Includes sufficient content (e.g., multiple views of the data) **Filter provides multiple views and page is navigable**
- Includes header element (with app name) and footer (with copyright) elements. **Header.js, footer.js**
- Includes 3+ images or media content. **See about section or homepage**
- Includes a form element.  **Timeline and homepage filter**

## React Components and Structure
-  App is broken up into a meaningful component hierarchy; each component reflects a "part" of the page **Chec
-  Components are appropriately sized and scoped around data props 
-  Components are defined as self-contained entities 
- Data is passed through the app via props to components; props and state are appropriately distinguished. 
- Content is only rendered on through components—no DOM calls! 
- **Group checked**

## React Interactivity (Feature List)
- Quiz, Implemented in QuizContainer.js
- Filter Implemented in LocationCardList.js and Filter.js 
- Timeline add and delete items with data persistence firbase (implemented in timeline.js)
- Like button, click like button and button add location to liked locations page with data persistence firebase. in likedlocations.js, LocationCardList.js

## Client Side Routing and Navigation
- Correctly integrates react-router (specifying <Route>s, <Link>s, etc). **See App.js routing at bottom**
- Includes sufficient number of routes (3+). **See App.js routing at bottom**
- Includes 1 route with a path parameter. **About.js, AboutDetails.js, LearnMore.js, App.js**
- Handles incorrect URLs and changes in access (e.g., login/logout) effectively. **See App.js routing at bottom**

## Client Side Routing
- Project imports another library (included in the package.json list of dependencies).
- App imports external components.
- App renders imported components (they do something).
- Library components are used in a meaningful way (support the functionality of the app)
- **Navbar.js uses the react Navbar and About.js uses the react carousel**

## Data Persistence (Firebase)
- App integrates Firebase web service
- App both reads from and writes to a Firebase (realtime) database
- Firebase access is properly integrated with React (e.g., through effect hooks)
- Catches and manages (e.g., displays) errors from data writing (.catch())
- Firebase data is rendered in the app in a meaningful way
- **Timeline.js writes new information to firebase and deletes it using the clear events button catches included**
- **Like button changes liked value in firebase to show on LikedLocation page** 

**Note the rest of the sections are largely based on past drafts/scattered throughout the code** 
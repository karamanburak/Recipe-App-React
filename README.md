# Recipe-App-React
  <div style="text-align:center;">
    <img src="https://i.imgur.com/waxVImv.png" alt="Colorful Stick">
</div>


## Demo


## Project Skeleton

```
06 - Recipe App (folder)
|       
SOLUTION
├── public
│     └── index.html
├── src
│    ├── assets
│    │       └── [images]
│    ├── components
│    │       ├── header
│    │       │     ├── Form.jsx
│    │       │     ├── Header.jsx
│    │       │     └── style.jsx
│    │       └── navbar
│    │             ├── Navbar.jsx
│    │             └── style.jsx
│    ├── context
│    │       ├── RecipeProvider.jsx
│    ├── pages
│    │       ├── about
│    │       │     ├── About.jsx
│    │       │     └── style.jsx
│    │       ├── details
│    │       │     ├── Details.jsx
│    │       │     └── style.jsx
│    │       ├── errorPage
│    │       │     ├── NotFound.jsx
│    │       │     └── NotFoundStyle.jsx
│    │       └── home
│    │             ├── Home.jsx
│    │             ├── RecipeCard.jsx
│    │             └── style.jsx
│    │       ├── login
│    │       │     ├── Login.jsx
│    │       │     └── style.jsx
│    │       ├── register
│    │       │     ├── Register.jsx
│    │       │     └── Style.jsx
│    ├── router
│    │       ├── AppRouter.jsx
│    │       └── PrivateRouter.jsx
│    ├── App.js
│    ├── index.css
│    └── index.js
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── yarn.lock
```

## Expected Outcome

![Project Snapshot](./src/assets/recipe-app.gif)


### At the end of the project, following topics are to be covered;

- HTML

- CSS

- JS

- ReactJS

### At the end of the project, you will be able to;

- improve coding skills within HTML & CSS & JS & ReactJS.

- use git commands (push, pull, commit, add etc.) and Github as Version Control System.

## Steps to Solution

- Step 1: Create React App using `yarn create react-app recipe-app`or `npx create-react-app recipe-app`

- Step 2: Signup `https://developer.edamam.com/edamam-docs-recipe-api` and get api key.

- Step 3 : Using api key and `axios` for getting data from `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`.

- Step 4: You are expected to code your project with **styled component**
 
- Step 5: You can use Context API for Global State Management

- Step 6: You can get random login background image from `https://picsum.photos/1600/900`


## Notes
- The user must enter username: "name" password: "1234" in order to login page or access the details page.

- You can add additional functionalities to your app.

- [Assets Folder](./src/assets/)

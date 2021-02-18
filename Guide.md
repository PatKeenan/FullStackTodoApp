# Rest API with Express and MongoDB

## Introduction
We are going to build a todo application using the MEAN Stack. We will use node and express for the REST API, MongoDB for the database, and Angular for the Frontend. This article will only be responsible for the backend of the project. 

***Important Note***

I'm assuming you have node installed on your machine. If you don't, go check out the node website for the installation instructions and then come back. I'll be using a mac for this tutorial so some comands might be different depending on your operating system.

---
## Project Setup
Create your project directory
```
mkdir MyProjectDirectory
```
Navigate to your project directory and run the `npm init -y` command. ***-y*** sets all the questions to their default values. You can change the values in the `package.json`.
```
cd MyProjectDirectory

npm init -y
```
As of now, your projects directory will only have a single file called `package.json`. If you open it, you'll see a key value pair of `"main" : "index.js"`. 

The `index.js` is where node looks for entry into your application. You can go ahead and name it whatever you want but the standarted is to call it either index, server, main, or app. Open the `package.json` file.

```json
// package.json

{
  "name": "todoapp",
  "version": "1.0.0",
  "main": "index.js", <-- name of the starter file
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```
Since we are building a REST API, we are going to rename the starter file, `server.js`. We didn't create it yet so don't worry, we will come back to it after we install some of our projects dependencies. We also don't have to rename it at all, I just like to do it this way.



### Install the Dependencies
We will need the following dependencies for our project.
- nodemon ***(refreshes the server)***
- mongoose ***(to work with MongoDB)***
- express ***(our main framework)***
- body-parser ***(middleware for post)***
- dotenv ***(hides our secrets)***

Production modules
```
npm install mongoose express body-parser dotenv
```
Development module
```
npm install --save-d nodemon
```
Since nodemon is just for use while we are developing, we added the `--save-d` to instruct node to only add it as a dev dependency in our `package.json` file. 

With nodemon installed, we are going to change the start scripts to use nodemon during development instead of the node command. Our `package.json` file now looks like the following: 
```json
// package.json

{
  "name": "todoapp",
  "version": "1.0.0",
  "main": "server.js", <-- changed from index.js
  "scripts": {
    "start": "nodemon server.js",  <-- added this line 
    "dev": "node server.js" <-- added this line
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "body-parser": "^1.19.0",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "mongoose": "^5.11.17"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}
```
### Create the starter file
Since node will be looking for the way into our app, lets create the `server.js` file in the project directory. While we are at it, we are going to create a few other files alongside.
```
touch server.js .env .gitignore
```
Open the `.gitignore` file and add the following lines:
```
node_modules/
.env
```
The `node_modules` directory is huge and you don't want to accidently add it to github. The `.env` file is another one we want to keep secret since this will house our database information.
### Initalize a git repository
Now is a good time to go ahead and create your git repo for the project.
```
git init
git add .
git status
```
If you see `node_modules` and `.env` inside the git status, you might not have included it correctly in your `.env` file. If it's not in there, go ahead and make your initial commit.
```
git commit -m "First Commit"
```

---
## Project Structure 
So far our project looks as follows:
```
├── node_modules
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── server.js
```
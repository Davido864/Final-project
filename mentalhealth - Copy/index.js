// My Forum

// A web application to provide discussion forums

// Import the modules we need

var express = require ('express')

var ejs = require('ejs')

var bodyParser= require ('body-parser')

const mysql = require('mysql')

const session = require('express-session');

const bcrypt = require('bcrypt');

const saltRounds = 10;


// Create the express application object

const app = express()

const port = 8000

app.use(bodyParser.urlencoded({ extended: true }))

// Define the database connection

const db = mysql.createConnection ({

    host: 'localhost',

    user: 'david',

    password: 'app8642',

    database: 'mentalhealth'

});

// Connect to the database

db.connect((err) => {

    if (err) {

        throw err;

    }

    console.log('Connected to database');

});

global.db = db;

// Set the directory where static files (css, js, etc) will be

app.use(express.static(__dirname + "/public"));

// Set the directory where Express will pick up HTML files

// __dirname will get the current directory

app.set('views', __dirname + '/views');

// Tell Express that we want to use EJS as the templating engine

app.set('view engine', 'ejs');

// Tells Express how we should process html files

// We want to use EJS's rendering engine

app.engine('html', ejs.renderFile);

// Define our data

var forumData = {forumName: "Mental Health app"}

// Requires the main.js file inside the routes folder passing in the Express app and data as arguments.  All the routes will go in this file

require("./routes/main")(app, forumData);

app.use(session({
    secret: '2486977fd64c694e51e7569fe4244781ef210c75a1101a3a1dcdce4d532d8b6855d219ed36d6f0c3eb861b0183bed9200dcdeeafe3b0a1c67c9580123aa23412',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false // Set to true if you are using HTTPS, otherwise set to false or omit
    }
}));


// Start the web app listening

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


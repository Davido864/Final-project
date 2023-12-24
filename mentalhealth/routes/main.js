// Route handler for forum web app
module.exports = function(app, forumData) {

    // Handle our routes

    // Login page
    app.get('/', function(req, res) {
        res.render('login.ejs', forumData);
    });

// Register page
app.get('/register', function(req, res) {
    res.render('register.ejs', forumData); // pass the necessary data to your register template
});

app.post('/register', function(req, res) {
    // Handle registration logic here
    // After successful registration, redirect to the login page
    res.redirect('/');
});

// Home page
// Assuming you have a file main.js for your route handlers

// ... your existing requires and app setup

// Home page route handler
app.get('/home', function(req, res) {
    res.render('home.ejs');
  });
  
  // ... rest of your route handlers
  

};


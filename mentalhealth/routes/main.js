module.exports = function(app, forumData) {
    // Login page
    app.get('/', function(req, res) {
        res.render('login.ejs', forumData);
    });

    // Handle login logic
    app.post('/', function(req, res) {
        const { username, password } = req.body;
        const query = 'SELECT password FROM users WHERE username = ?';
    
        db.query(query, [username], function(err, results) {
            if (err) {
                console.error('Database error:', err);
                res.redirect('/login?error=Database+error');
            } else if (results.length > 0 && password === results[0].password) {
                // If you have session management set up
                req.session.loggedin = true;
                req.session.username = username;
                res.redirect('/home');
            } else {
                res.redirect('/');
            }
        });
    });
    
    // Register page
app.get('/register', function(req, res) {
    res.render('register.ejs', forumData);
});

// Handle registration logic
app.post('/register', function(req, res) {
    const { username, password, fullName, age } = req.body;
    let sqlquery = `INSERT INTO users (username, password, fullName, age) VALUES (?, ?, ?, ?)`;
    db.query(sqlquery, [username, password, fullName, age], function(err, result) {
        if (err) {
            res.render('register.ejs', { error: "Error in registration" });
        } else {
            res.redirect('/');
        }
    });
});

// Home page
app.get('/home', function(req, res) {
    res.render('home.ejs');
});

// About you page
app.get('/aboutyou', function(req, res) {
    res.render('aboutyou.ejs');
});

// Quiz page
app.get('/quiz', function(req, res) {
    res.render('quiz.ejs');
});

//Flashcards page
app.get('/flashcard', function(req, res) {
    res.render('flashcard.ejs');
});

// Feedback page
app.get('/feedback', function(req, res) {
    res.render('feedback.ejs');
});

// ... rest of your route handlers

};

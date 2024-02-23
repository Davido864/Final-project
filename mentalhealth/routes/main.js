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

// Guide page
app.get('/guide', function(req, res) {
    res.render('guide.ejs');
});

// In depth guide page
app.get('/indepthguide', function(req, res) {
    res.render('indepthguide.ejs');
});

app.get('/indepthguide2', function(req, res) {
    res.render('indepthguide2.ejs');
});

app.get('/indepthguide3', function(req, res) {
    res.render('indepthguide3.ejs');
});

app.get('/indepthguide4', function(req, res) {
    res.render('indepthguide4.ejs');
});

// Video page
app.get('/video', function(req, res) {
    res.render('video.ejs');
});

app.get('/video2', function(req, res) {
    res.render('video2.ejs');
});

app.get('/video3', function(req, res) {
    res.render('video3.ejs');
});

app.get('/video4', function(req, res) {
    res.render('video4.ejs');
});

// Presentation page
app.get('/presentation', function(req, res) {
    res.render('presentation.ejs');
});

app.get('/presentation2', function(req, res) {
    res.render('presentation2.ejs');
});

app.get('/presentation3', function(req, res) {
    res.render('presentation3.ejs');
});

app.get('/presentation4', function(req, res) {
    res.render('presentation4.ejs');
});

// Article page
app.get('/article', function(req, res) {
    res.render('article.ejs');
});

app.get('/article2', function(req, res) {
    res.render('article2.ejs');
});

app.get('/article3', function(req, res) {
    res.render('article3.ejs');
});

app.get('/article4', function(req, res) {
    res.render('article4.ejs');
});

// support page
app.get('/support', function(req, res) {
    res.render('support.ejs');
});

// ... rest of your route handlers

};

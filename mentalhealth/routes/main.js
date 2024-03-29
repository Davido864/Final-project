module.exports = function(app, forumData) {
    // Login page
    app.get('/', function(req, res) {
        res.render('login.ejs', forumData);
    });

    // Handle login logic
    app.post('/login', function(req, res) {
        var username = req.body.username;
        var password = req.body.password;
    
        if (username && password) {
            var query = `SELECT * FROM users WHERE username = ?`;
    
            db.query(query, [username], function(error, results) {
                if (error) {
                    console.error('Database error:', error);
                    return res.send('A database error occurred');
                }
    
                if (results.length > 0) {
                    // Compare hashed password
                    bcrypt.compare(password, results[0].password, function(err, result) {
                        if (result == true) {
                            req.session.loggedin = true;
                            req.session.username = username;
                            return res.redirect('/home');
                        } else {
                            return res.send('Incorrect Password');
                        }
                    });
                } else {
                    return res.send('Incorrect Username');
                }
            });
        } else {
            return res.send('Please enter Username and Password!');
        }
    });
    
    // Register page
app.get('/register', function(req, res) {
    res.render('register.ejs', forumData);
});

// Handle registration logic
app.post('/register', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var fullName = req.body.fullName;
    var age = req.body.age;

    if (username && password && fullName && age) {
        // Hash the password before inserting it into the database
        bcrypt.hash(password, saltRounds, function(err, hash) {
            if (err) {
                console.error('Error hashing password:', err);
                return res.send('Registration failed due to a server error');
            }
            var sqlquery = `INSERT INTO users (username, password, fullName, age) VALUES (?, ?, ?, ?)`;

            db.query(sqlquery, [username, hash, fullName, age], function(err, result) {
                if (err) {
                    console.error('Error in registration:', err);
                    return res.send('Registration failed due to a database error');
                }
                return res.redirect('/');
            });
        });
    } else {
        return res.send('Please complete all registration fields');
    }
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

// Support page
app.get('/support', function(req, res) {
    res.render('support.ejs');
});

// Disscussion page
app.get('/disscussion', function(req, res) {
    res.render('disscussion.ejs');
});

// View community forum page
app.get('/community', function(req, res) {
    res.render('community.ejs');
});

// Meditation excercises page
app.get('/meditation', function(req, res) {
    res.render('meditation.ejs');
});

// Relaxation page
app.get('/relaxation', function(req, res) {
    res.render('relaxation.ejs');
});

// forgot password page
app.get('/forgot', function(req, res) {
    res.render('forgot.ejs');
});

// new password page
app.get('/newpass', function(req, res) {
    res.render('newpass.ejs');
});
// ... rest of your route handlers
};

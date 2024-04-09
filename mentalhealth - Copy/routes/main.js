// The javascript code allows for my ejs page to be initialized onto my website.

module.exports = function(app, forumData) {
// Login page
app.get('/', function(req, res) {
    res.render('login.ejs', forumData);
});
    
// Register page
app.get('/register', function(req, res) {
    res.render('register.ejs', forumData);
});

app.get('/registersuccess', function(req, res) {
    res.render('registersuccess.ejs', forumData);
});

// Home page
app.get('/home', function(req, res) {
    res.render('home.ejs');
});

// About you page
app.get('/aboutyou', function(req, res) {
    res.render('aboutyou.ejs');
});

app.get('/aboutyousuccess', function(req, res) {
    res.render('aboutyousuccess.ejs');
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

app.get('/supportsuccess', function(req, res) {
    res.render('supportsuccess.ejs');
});

// Disscussion page
app.get('/disscussion', function(req, res) {
    res.render('disscussion.ejs');
});

app.get('/disscussionsuccess', function(req, res) {
    res.render('disscussionsuccess.ejs');
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

// forgot/new password pages
app.get('/forgot', function(req, res) {
    res.render('forgot.ejs');
});

app.get('/newpass', function(req, res) {
    res.render('newpass.ejs');
});

app.get('/newpasssuccess', function(req, res) {
    res.render('newpasssuccess.ejs');
});

// upcoming features page
app.get('/upcoming', function(req, res) {
    res.render('upcoming.ejs');
});

app.get('/upcoming2', function(req, res) {
    res.render('upcoming2.ejs');
});

app.get('/upcoming3', function(req, res) {
    res.render('upcoming3.ejs');
});

app.get('/upcoming4', function(req, res) {
    res.render('upcoming4.ejs');
});
app.get('/upcoming5', function(req, res) {
    res.render('upcoming5.ejs');
});
app.get('/unavaliable', function(req, res) {
    res.render('unavaliable.ejs');
});

app.get('/unavaliable2', function(req, res) {
    res.render('unavaliable2.ejs');
});

app.get('/unavaliable3', function(req, res) {
    res.render('unavaliable3.ejs');
});

// quiz questions page
app.get('/mentalhealthquiz', function(req, res) {
    res.render('mentalhealthquiz.ejs');
});

app.get('/mentalhealthquiz2', function(req, res) {
    res.render('mentalhealthquiz2.ejs');
});

app.get('/mentalhealthquiz3', function(req, res) {
    res.render('mentalhealthquiz3.ejs');
});

app.get('/mentalhealthquiz4', function(req, res) {
    res.render('mentalhealthquiz4.ejs');
});

app.get('/mentalhealthquiz5', function(req, res) {
    res.render('mentalhealthquiz5.ejs');
});


app.get('/wellbeingquiz', function(req, res) {
    res.render('wellbeingquiz.ejs');
});

app.get('/wellbeingquiz2', function(req, res) {
    res.render('wellbeingquiz2.ejs');
});

app.get('/wellbeingquiz3', function(req, res) {
    res.render('wellbeingquiz3.ejs');
});

app.get('/wellbeingquiz4', function(req, res) {
    res.render('wellbeingquiz4.ejs');
});

app.get('/wellbeingquiz5', function(req, res) {
    res.render('wellbeingquiz5.ejs');
});


app.get('/disabilityquiz', function(req, res) {
    res.render('disabilityquiz.ejs');
});

app.get('/disabilityquiz2', function(req, res) {
    res.render('disabilityquiz2.ejs');
});

app.get('/disabilityquiz3', function(req, res) {
    res.render('disabilityquiz3.ejs');
});

app.get('/disabilityquiz4', function(req, res) {
    res.render('disabilityquiz4.ejs');
});

app.get('/disabilityquiz5', function(req, res) {
    res.render('disabilityquiz5.ejs');
});


app.get('/bullyingquiz', function(req, res) {
    res.render('bullyingquiz.ejs');
});

app.get('/bullyingquiz2', function(req, res) {
    res.render('bullyingquiz2.ejs');
});

app.get('/bullyingquiz3', function(req, res) {
    res.render('bullyingquiz3.ejs');
});

app.get('/bullyingquiz4', function(req, res) {
    res.render('bullyingquiz4.ejs');
});

app.get('/bullyingquiz5', function(req, res) {
    res.render('bullyingquiz5.ejs');
});

app.get('/quizsuccess', function(req, res) {
    res.render('quizsuccess.ejs');
});

// Flashcard set page

app.get('/mentalhealthflashcard', function(req, res) {
    res.render('mentalhealthflashcard.ejs');
});

app.get('/mentalhealthflashcard2', function(req, res) {
    res.render('mentalhealthflashcard2.ejs');
});

app.get('/mentalhealthflashcard3', function(req, res) {
    res.render('mentalhealthflashcard3.ejs');
});

app.get('/mentalhealthflashcard4', function(req, res) {
    res.render('mentalhealthflashcard4.ejs');
});

app.get('/mentalhealthflashcard5', function(req, res) {
    res.render('mentalhealthflashcard5.ejs');
});

app.get('/flashcardmentalhealth', function(req, res) {
    res.render('flashcardmentalhealth.ejs');
});

app.get('/flashcardmentalhealth2', function(req, res) {
    res.render('flashcardmentalhealth2.ejs');
});

app.get('/flashcardmentalhealth3', function(req, res) {
    res.render('flashcardmentalhealth3.ejs');
});

app.get('/flashcardmentalhealth4', function(req, res) {
    res.render('flashcardmentalhealth4.ejs');
});

app.get('/flashcardmentalhealth5', function(req, res) {
    res.render('flashcardmentalhealth5.ejs');
});

app.get('/wellbeingflashcard', function(req, res) {
    res.render('wellbeingflashcard.ejs');
});

app.get('/disabilityflashcard', function(req, res) {
    res.render('disabilityflashcard.ejs');
});

app.get('/bullyingflashcard', function(req, res) {
    res.render('bullyingflashcard.ejs');
});

// ... rest of your route handlers
};


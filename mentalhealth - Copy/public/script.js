// This JavaScript code is designed to handle user interactions on a web page.

// This script is essential for enhancing user navigation within the website, allowing for seamless transitions between different pages and sections.


// This variables below are used to initialise the event Listeners.
// Which allow for the website transitions/user interactions to take place.

document.addEventListener('DOMContentLoaded', (event) => {

    const registerButton = document.getElementById('registerButton');

    const backButton = document.getElementById('backButton');

    const loginButton = document.getElementById('loginButton');

    const profileImage = document.getElementById('profileImage');

    const fileInput = document.getElementById('fileInput');

    const username = document.getElementById('username');

    const password = document.getElementById('password');

    const generateQuizButton = document.getElementById('generateQuizButton');

    const tailorContentButton = document.getElementById('tailorContentButton');

    const describe = document.getElementById('describe');

    const description = document.getElementById('description');

    const postButton = document.getElementById('post');

    const subject = document.getElementById('subject');

    const message = document.getElementById('message');

    const concern = document.getElementById('concern');

    const supportButton = document.getElementById('support')

    // Event listener for Register button

    if (registerButton) {

        registerButton.addEventListener('click', function() {

            window.location.href = 'register'; 

        });

    }

    // Event listener for Back button

    if (backButton) {

        backButton.addEventListener('click', function() {

            window.history.back();

        });

    }

    // Event listener for Login button

    if (loginButton) {

        loginButton.addEventListener('click', function (e) {

            // Check if username and password are filled

            if (username.value.trim() === '' || password.value.trim() === '') {

                // Prevent form submission

                e.preventDefault();

                // Alert the user

                alert('Please enter both username and password.'); } 
                
            else {

                // Redirect to the home page

                window.location.href = 'home';

            }

        });

    }

    // Event listener for selecting a Profile image

    if (profileImage) {

        profileImage.addEventListener('click', function() {

            fileInput.click();

        });

    }

    // Event listener for selecting File from file explorer

    if (fileInput) {

        fileInput.addEventListener('change', function(event) {

            const output = document.getElementById('profileImage');

            output.src = URL.createObjectURL(event.target.files[0]);

            output.onload = function() {

                URL.revokeObjectURL(output.src) // free memory

            }

        });

    }

    // Event listener for the generate quiz button

    if (generateQuizButton) {
        
        generateQuizButton.addEventListener('click', function(e) {
            
            // Retrieve the values inside the event listener
            
            const topic = document.getElementById('topicSelector').value;
            const difficulty = document.getElementById('difficultySelector').value;
            const numberOfQuestions = document.getElementById('questionsSelector').value;

            // Check if the selections meet the criteria
            if (topic === 'topic1' && difficulty === 'option1' && numberOfQuestions === 'option1') {
                window.location.href = 'mentalhealthquiz'; } 
            
            else if (topic === 'topic2' && difficulty === 'option1' && numberOfQuestions === 'option1'){
                window.location.href= 'wellbeingquiz'; }
            
            else if (topic === 'topic3' && difficulty === 'option1' && numberOfQuestions === 'option1') {
                window.location.href='disabilityquiz'; }
            
            else if (topic === 'topic4' && difficulty === 'option1' && numberOfQuestions === 'option1') {
                window.location.href='bullyingquiz' ; }

            else if (topic === 'topic5' && difficulty === 'option4' && numberOfQuestions === 'option5') {
                window.location.href='mentalhealthflashcard' ; }
            
            else if (topic === 'topic6' && difficulty === 'option4' && numberOfQuestions === 'option5') {
                window.location.href='wellbeingflashcard'; }
            
            else if (topic === 'topic7' && difficulty === 'option4' && numberOfQuestions === 'option5') {
                window.location.href='disabilityflashcard'; }
            
            else if (topic === 'topic8' && difficulty === 'option4' && numberOfQuestions === 'option5') {
                window.location.href='bullyingquiz'; }
            
            else {
                
                // Prevent the default button click behavior
                e.preventDefault();
                
                // Show an error message
                alert('This option is currently unavavlible please make another selection.');
            
            }
        
        });
    
    }

    // event listener for the tailor content button
    
    if (tailorContentButton) {

        tailorContentButton.addEventListener('click', function (e) {

            if (describe.value.trim() === '') {

                // Prevent form submission

                e.preventDefault();

                // Alert the user

                alert('Please describe yourself.');

            } 
            
            else if (description.value.trim() === '') {
      
                e.preventDefault();

                // Alert the user

                alert('Please describe the purpose for using the app.');
            }
                    
            else {

                window.location.href = 'aboutyousuccess';

            }

        });

    }

    // Event listener for adding posts 
    
    if (postButton) {

        postButton.addEventListener('click', function (e) {

            if (subject.value.trim() === '') {

                // Prevent form submission

                e.preventDefault();

                // Alert the user

                alert('Please write a subject.');

            } 
            
            else if (message.value.trim() === '') {
        
                e.preventDefault();

                // Alert the user

                alert('Please write a message.');
            }
                    
            else {

                window.location.href = 'disscussionsuccess';

            }

        });

}

    // event listener for the support button

    if (supportButton) {

        supportButton.addEventListener('click', function (e) {

            // Check if username and password are filled

            if (concern.value.trim() === '') {

                // Prevent form submission

                e.preventDefault();

                // Alert the user

                alert('Please write a message.');

            } 
            
            else {

                // Redirect to the home page

                window.location.href = 'supportsuccess';

            }

        });

 }

});
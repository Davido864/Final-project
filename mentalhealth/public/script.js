// This JavaScript code is designed to handle user interactions on a web page.
// This script is essential for enhancing user navigation within the website, allowing for seamless transitions between different pages and sections.

document.addEventListener('DOMContentLoaded', (event) => {
    const registerButton = document.getElementById('registerButton');
    const backButton = document.getElementById('backButton');
    const loginButton = document.getElementById('loginButton');

    if (registerButton) {
        registerButton.addEventListener('click', function() {
            window.location.href = 'register'; // Make sure this URL is correct
        });
    }

    if (backButton) {
        backButton.addEventListener('click', function() {
            window.history.back();
        });
    }

    if (loginButton) {
        loginButton.addEventListener('click', function () {
            window.location.href = 'home';
        });
    }
});

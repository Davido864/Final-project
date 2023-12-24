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

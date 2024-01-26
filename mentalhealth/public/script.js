// This JavaScript code is designed to handle user interactions on a web page.

// This script is essential for enhancing user navigation within the website, allowing for seamless transitions between different pages and sections.


document.addEventListener('DOMContentLoaded', (event) => {

    const registerButton = document.getElementById('registerButton');

    const backButton = document.getElementById('backButton');

    const loginButton = document.getElementById('loginButton');

    const profileImage = document.getElementById('profileImage');

    const fileInput = document.getElementById('fileInput');


    // Event listener for Register button

    if (registerButton) {

        registerButton.addEventListener('click', function() {

            window.location.href = 'register'; // Make sure this URL is correct

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

        loginButton.addEventListener('click', function () {

            window.location.href = 'home';

        });

    }


    // Event listener for Profile image

    if (profileImage) {

        profileImage.addEventListener('click', function() {

            fileInput.click();

        });

    }


    // Event listener for File input

    if (fileInput) {

        fileInput.addEventListener('change', function(event) {

            const output = document.getElementById('profileImage');

            output.src = URL.createObjectURL(event.target.files[0]);

            output.onload = function() {

                URL.revokeObjectURL(output.src) // free memory

            }

        });

    }

});

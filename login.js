
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector('.form-box.login form');
    const signupForm = document.querySelector('.form-box.signup form');
    const signupLink = document.getElementById('signup-link');
    const loginLink = document.getElementById('login-link');
    const formPopup = document.querySelector('.form-popup');

    // Show login popup
    const showPopupBtn = document.querySelector(".login-btn");
    showPopupBtn.addEventListener("click", () => {
        formPopup.classList.add("show-popup");
    });

    // Hide login popup
    const hidePopupBtn = document.querySelector(".close-btn");
    hidePopupBtn.addEventListener("click", () => {
        formPopup.classList.remove("show-popup");
    });

    // Toggle to Sign-up form
    signupLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.form-box.login').style.display = 'none';
        document.querySelector('.form-box.signup').style.display = 'block';
    });

    // Toggle to Login form
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.form-box.signup').style.display = 'none';
        document.querySelector('.form-box.login').style.display = 'block';
    });

    // Login form submit listener
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    alert("Login successful!");
                    formPopup.classList.remove("show-popup");
                })
                .catch((error) => {
                    alert(error.message);
                });
        });
    }

    // Signup form submit listener
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up
                    alert("Sign up successful!");
                    formPopup.classList.remove("show-popup");
                })
                .catch((error) => {
                    alert(error.message);
                });
        });
    }
});
// Get the login button, close button, and login dialog
const loginBtn = document.getElementById('loginBtn');
const closeBtn = document.getElementById('closeBtn');
const loginDialog = document.getElementById('loginDialog');

// Add click event listener to open login dialog
loginBtn.addEventListener('click', () => {
    loginDialog.style.display = 'block';
});

// Add click event listener to close login dialog
closeBtn.addEventListener('click', () => {
    loginDialog.style.display = 'none';
});

// Prevent form submission (for demonstration)
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted!');
});

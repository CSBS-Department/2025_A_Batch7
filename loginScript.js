const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");
const loginForm = formPopup.querySelector(".login form");
const signupForm = formPopup.querySelector(".signup form");
const loginSuccessPopup = document.querySelector(".login-success-popup");
const createdAccountPopup = document.querySelector(".created-account-popup");
const closeSuccessPopupBtns = document.querySelectorAll(".close-success-popup");

// Function to show success popup
function showSuccessPopup(popup) {
  document.body.classList.add("show-popup");
  popup.classList.add("show-popup");
}

// Function to hide success popup
function hideSuccessPopup(popup) {
  document.body.classList.remove("show-popup");
  popup.classList.remove("show-popup");
}
// Function to clear input fields
function clearInputFields(form) {
  form.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
}

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    formPopup.classList[link.id === "signup-link" ? "add" : "remove"](
      "show-signup"
    );
  });
});

// Login form submission
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Add your login logic here
  // If login is successful, show the success popup
  showSuccessPopup(loginSuccessPopup);
  // Clear input fields
  clearInputFields(loginForm);
});

// Signup form submission
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Add your signup logic here
  // If account creation is successful, show the success popup
  showSuccessPopup(createdAccountPopup);
  // Clear input fields
  clearInputFields(signupForm);
});

// Close success popups
closeSuccessPopupBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    hideSuccessPopup(loginSuccessPopup);
    hideSuccessPopup(createdAccountPopup);
  });
});

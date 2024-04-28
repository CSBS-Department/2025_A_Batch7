// fetching news
function fetchNews() {
    fetch('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=65b89511c45b4b28bd936b70a30f4300')
         .then(response => response.json())
      .then(data => {
        const topNews = data.articles.slice(0, 4);
        const newsGrid = document.getElementById('newsGrid');
        newsGrid.innerHTML = ''; // Clear previous articles
        topNews.forEach(article => {
          const articleDiv = document.createElement('div');
          articleDiv.classList.add('news-article');
          articleDiv.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read More</a>
          `;
          newsGrid.appendChild(articleDiv);
        });
      })
      .catch(error => console.error('Error fetching news:', error));
  }
  
  // Initial fetch
  fetchNews();
  
  // Update news every 30 minutes
  setInterval(fetchNews, 30 * 60 * 1000); // 30 minutes in milliseconds
  


// Initialize Firebase app and authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Function to check if user is logged in
function checkLoginStatus() {
    const user = auth.currentUser;
    if (user) {
        // User is logged in
        document.querySelector('.login-link').style.display = 'none'; // Hide login link
        document.getElementById('user-info').style.display = 'block'; // Show user info box
        document.getElementById('user-email').textContent = 'Logged in as: ' + user.email;
    } else {
        // User is not logged in
        document.querySelector('.login-link').style.display = 'block'; // Show login link
        document.getElementById('user-info').style.display = 'none'; // Hide user info box
    }
}

// Check login status when the page loads
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
});

// Logout function
document.getElementById('logout').addEventListener('click', function() {
    signOut(auth).then(() => {
        // Sign-out successful
        console.log('Sign-out successful.');
        alert('Logout successful.');
        window.location.href = 'login.html'; // Redirect to login page after logout
    }).catch((error) => {
        // An error happened
        console.log('An error occurred during logout:', error);
        alert('An error occurred during logout. Please try again.');
    });
});

// >>>>>>> 357f9f3c536533a37e41f12bf9e12755960bf1ef

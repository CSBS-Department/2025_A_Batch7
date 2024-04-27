document.addEventListener('DOMContentLoaded', function() {
    fetchNews(); // Initial fetch
  
    // Update news every 30 minutes
    setInterval(fetchNews, 30 * 60 * 1000); // 30 minutes in milliseconds
  });
  
  function fetchNews() {
    // fetch('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=65b89511c45b4b28bd936b70a30f4300')
   fetch('https://newsdata.io/api/1/news?apikey=pub_42935d43f63c2e9ac466c035c967bcd2876ca&q=India%20health%20news')   
    .then(response => response.json())
      .then(data => {
        const articles = data.articles.slice(0, 4); // Get only the top 4 articles
        const newsGrid = document.getElementById('newsGrid');
        newsGrid.innerHTML = ''; // Clear previous articles
  
        articles.forEach(article => {
          const articleDiv = document.createElement('div');
          articleDiv.classList.add('news-article');
          articleDiv.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
          `;
          newsGrid.appendChild(articleDiv);
        });
      })
      .catch(error => console.error('Error fetching news:', error));
  }
  
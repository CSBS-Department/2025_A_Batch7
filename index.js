// Fetch news articles from the API
fetch('https://newsapi.org/v2/everything?q=pollution&apiKey=65b89511c45b4b28bd936b70a30f4300')
    .then(response => response.json())
    .then(data => {
        // Get the top three or four news articles
        const topNews = data.articles.slice(0, 4);

        // Create HTML elements for each news article
        const newsGrid = document.getElementById('newsGrid');
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

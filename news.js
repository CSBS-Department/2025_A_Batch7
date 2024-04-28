document.addEventListener("DOMContentLoaded", function() {
  const swiperContainer = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const pollutionNewsContainer = document.getElementById("pollution-news");

  function fetchPollutionNews() {
      const apiKey = '65b89511c45b4b28bd936b70a30f4300';
      const apiUrl = `https://newsapi.org/v2/everything?q=pollution environmental&language=en&sortBy=publishedAt&apiKey=${apiKey}`;

      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              // Clear previous news items
              pollutionNewsContainer.innerHTML = '';

              // Display pollution-related news articles
              const articles = data.articles.slice(0, 5); // Get only first five articles
              articles.forEach(article => {
                  const newsItem = document.createElement('div');
                  newsItem.classList.add('swiper-slide', 'news-item');
                  newsItem.innerHTML = `
                      <div class="news-title">${article.title}</div>
                      <div class="news-description">${article.description}</div>
                      <a href="${article.url}" target="_blank">Read more</a>
                  `;
                  pollutionNewsContainer.appendChild(newsItem);
              });

              // Update Swiper instance
              swiperContainer.update();
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
  }

  // Initial fetch
  fetchPollutionNews();

  // Fetch pollution-related news every hour
  setInterval(fetchPollutionNews, 1800000); 
});

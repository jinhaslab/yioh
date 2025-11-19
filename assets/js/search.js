// Search functionality
(function() {
  let searchData = [];
  let searchInput;
  let searchResults;

  // Load search data
  async function loadSearchData() {
    try {
      const baseUrl = document.querySelector('meta[name="baseurl"]')?.content || '';
      const response = await fetch(`${baseUrl}/search.json`);
      searchData = await response.json();
    } catch (error) {
      console.error('Failed to load search data:', error);
    }
  }

  // Initialize search
  function initSearch() {
    searchInput = document.getElementById('search-input');
    searchResults = document.getElementById('search-results');

    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', function(e) {
      const query = e.target.value.trim().toLowerCase();

      if (query.length < 2) {
        searchResults.innerHTML = '';
        searchResults.classList.remove('has-results');
        return;
      }

      performSearch(query);
    });

    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.remove('has-results');
      }
    });
  }

  // Perform search
  function performSearch(query) {
    const results = searchData.filter(post => {
      const titleMatch = post.title.toLowerCase().includes(query);
      const contentMatch = post.content.toLowerCase().includes(query);
      const excerptMatch = post.excerpt.toLowerCase().includes(query);

      return titleMatch || contentMatch || excerptMatch;
    });

    displayResults(results, query);
  }

  // Display search results
  function displayResults(results, query) {
    if (results.length === 0) {
      searchResults.innerHTML = '<div style="padding: 20px; text-align: center; color: #666;">검색 결과가 없습니다.</div>';
      searchResults.classList.add('has-results');
      return;
    }

    const categoryLabels = {
      'symposium': '심포지엄',
      'seminar': '세미나',
      'education': '교육'
    };

    searchResults.innerHTML = results.slice(0, 10).map(post => {
      const categoryLabel = categoryLabels[post.category] || post.category;

      // Highlight matching text
      let excerpt = post.excerpt;
      const regex = new RegExp(`(${query})`, 'gi');
      excerpt = excerpt.replace(regex, '<mark>$1</mark>');

      return `
        <div class="search-result-item">
          <h4>${post.title}</h4>
          <div style="font-size: 0.85em; color: #666; margin-bottom: 5px;">
            ${post.date} | ${categoryLabel}
          </div>
          <p>${excerpt}</p>
          <a href="${post.url}" style="color: #0066cc; text-decoration: none; font-size: 0.9em;">자세히 보기 →</a>
        </div>
      `;
    }).join('');

    searchResults.classList.add('has-results');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      loadSearchData();
      initSearch();
    });
  } else {
    loadSearchData();
    initSearch();
  }
})();

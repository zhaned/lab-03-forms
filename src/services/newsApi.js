export const fetchArticles = async () => {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}&pageSize=10`);
  
  const json = await response.json();

  return json.articles.map(article => ({
    title: article.title,
    author: article.author,
    description: article.description
  }))
};

export const fetchArticleByValue = async (value) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${value}&apiKey=${process.env.API_KEY}&pageSize=5`
  );
  const json = await response.json();

  return json.articles.map(article => ({
    title: article.title,
    author: article.author,
    description: article.description
  }))
};
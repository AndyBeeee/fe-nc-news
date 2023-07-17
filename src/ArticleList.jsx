import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ArticleCard from './ArticleCard'

function ArticleList() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios.get('https://nc-news-42oi.onrender.com/api/articles')
        .then((response) => {
        setArticles(response.data.articles)
        })
        .catch((error) => {
        console.error('Error getting articles', error)
        })
    }, [])

  return (
    <div className="article-list">
        {articles.map((article) => (
        <ArticleCard key={article.title} article={article} />
        ))}
    </div>
  )
}

export default ArticleList
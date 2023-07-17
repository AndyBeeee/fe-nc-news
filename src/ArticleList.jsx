import React, { useState, useEffect } from 'react'
import ArticleCard from './ArticleCard'
import { getArticles } from './utils/api'

function ArticleList() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getArticles()
        .then((articles) => {
        setArticles(articles)
        setLoading(false)
        })
        .catch((error) => {
        setLoading(false)
        setError(true)
        console.error('Error getting articles', error);
        })
    }, [])

    if (loading) {
      return <h1>Loading Articles</h1>
    } else if (error) {
      return <h1>Error Loading Articles</h1>
    } else {
      return (
        <div className="articleList">
            {articles.map((article) => (
            <ArticleCard key={article.title} article={article} />
            ))}
        </div>
      )
    }
  }
  
  export default ArticleList
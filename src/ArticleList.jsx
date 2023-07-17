import React, { useState, useEffect } from 'react'
import ArticleCard from './ArticleCard'
import { getArticles } from './utils/api'

function ArticleList() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getArticles()
        .then((articles) => {
        setArticles(articles);
        })
        .then (() => {
          setLoading(false)
        })
        .catch((error) => {
        console.error('Error getting articles', error);
        })
    }, [])

  return loading ? (
    <h1> Loading Articles </h1>
  ) : (
    <div className="articleList">
        {articles.map((article) => (
        <ArticleCard key={article.title} article={article} />
        ))}
    </div>
  )
}

export default ArticleList
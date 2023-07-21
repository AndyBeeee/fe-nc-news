import React, { useState, useEffect } from 'react'
import ArticleCard from './ArticleCard'
import { getArticles } from './utils/api'
import { useParams } from 'react-router-dom'
import SortFunc from './Sort'

function ArticleList() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { topic } = useParams()
  const [sort, setSort] = useState('created_at')
  const [order, setOrder] = useState('desc')

  useEffect(() => {
    getArticles(topic, sort, order)
        .then((articles) => {
        setArticles(articles)
        setLoading(false)
        })
        .catch((error) => {
        setLoading(false)
        setError(true)
        })
    }, [topic, sort, order])

    if (loading) {
      return <h1>Loading Articles</h1>
    } else if (error) {
      return <h1>Error Loading Articles</h1>
    } else {
      return (
        <div className="articleList"> 
            <SortFunc setSort={setSort} setOrder={setOrder} />
            {articles.map((article) => (
            <ArticleCard key={article.title} article={article} />
            ))}
        </div>
      )
    }
  }
  
  export default ArticleList
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArticle } from './utils/api'
import CommentList from './CommentList'

function Article() {
  const [article, setArticle] = useState({})
  const { article_id } = useParams()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)


  useEffect(() => {
    getArticle(article_id)
      .then((article) => {
        setArticle(article)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        setError(true)
        })
    }, [article_id]);

    if (loading) {
      return <h1>Loading Article</h1>
    } else if (error) {
      return <h1>Error Loading Article</h1>
    } else {
      return (
        <div className="articleContainer">
          <div className="article">
            <div>
              <img src={article.article_img_url} alt="Article" />
            </div>
            <div>
              <h2>{article.title}</h2>
              <p>Category: {article.topic}</p>
              <p>Author: {article.author}</p>
              <p>{article.body}</p>
              <p>Votes: {article.votes}</p>
            </div>
          </div>
          <div className="commentsTitle">
          <h2>COMMENTS</h2>
          </div>
          <div className="commentsSection">
            <CommentList />
          </div>
        </div>
      )
    }
  }



export default Article
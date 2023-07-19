import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArticle } from './utils/api'
import { handleUpVote, handleDownVote } from './utils/vote' // Add this line
import CommentList from './CommentList'
import thumbUp from './assets/th copy.jpg' 
import thumbDown from './assets/thumbdown2.png'

function Article() {
  const [article, setArticle] = useState({})
  const { article_id } = useParams()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [voteStatus, setVoteStatus] = useState(null)
  const [voteMessage, setVoteMessage] = useState('');


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
          <div className="articleLeft">
            <img src={article.article_img_url} alt={article.title} />
          <div className="voteButtons">
              <img src={thumbUp} alt="Upvote" 
              onClick={() => handleUpVote(article_id, setArticle, setVoteStatus, setVoteMessage)}/>
              <p>{article.votes}</p>
              <img src={thumbDown} alt="Downvote" 
              onClick={() => handleDownVote(article_id, setArticle, setVoteStatus, setVoteMessage)}/>
        </div>
          <div className="voteMessage">
            {voteMessage && <p>{voteMessage}</p>}
          </div>
        </div>
      <div className="articleRight">
        <h2>{article.title}</h2>
        <p>Category: {article.topic}</p>
        <p>Author: {article.author}</p>
        <p>{article.body}</p>
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
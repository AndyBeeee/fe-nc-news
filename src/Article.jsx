import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArticle } from './utils/api'
import { handleVote } from './utils/vote' 
import CommentList from './CommentList'
import thumbUp from './assets/thumbup2.png' 
import thumbDown from './assets/thumbdown2.png'
import thumbUpGrey from './assets/thumbupgrey.png' 
import thumbDownGrey from './assets/thumbdowngrey.png'



function Article() {
  const [article, setArticle] = useState({})
  const { article_id } = useParams()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [hasVoted, setHasVoted] = useState(false);
  const [voteMessage, setVoteMessage] = useState('')


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
              <img src={hasVoted ? thumbUpGrey : thumbUp}alt="Upvote" 
              onClick={() => handleVote(article, article_id, 1, setArticle, setVoteMessage, hasVoted, setHasVoted)}/>
              <p>{article.votes}</p>
              <img src={hasVoted ? thumbDownGrey : thumbDown} alt="Downvote" 
              onClick={() => handleVote(article, article_id, -1, setArticle, setVoteMessage, hasVoted, setHasVoted)}/>
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
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getComments } from './utils/api'
import CommentCard from './CommentCard'

function CommentList() {
  const [comments, setComments] = useState([])
  const { article_id } = useParams()

  useEffect(() => {
    getComments(article_id)
    .then((res) => {
    setComments(res)
      })
  }, [article_id])

if (comments.length > 0) {
  return (
    <div>
      {comments.map((comment) => (<CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </div>
  )} else {
    return <h1>No Comments Yet</h1>
  }
}

export default CommentList
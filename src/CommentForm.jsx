import React, { useState } from 'react'
import { postComment } from './utils/api'
const hardcodedUsername = 'cooljmessy'

function CommentForm({ article_id, setComments, setCommentSubmitted, setCommentButtonClick }) {
  const [username, setUsername] = useState(hardcodedUsername)
  const [body, setBody] = useState('')
  const [error, setError] = useState(null)
  const [commentLoading, setCommentLoading] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    setCommentLoading(true)
    postComment(article_id, hardcodedUsername, body)
      .then((newComment) => {
        setComments((currentComments) => [newComment, ...currentComments]);
        setUsername('')
        setBody('')
        setCommentSubmitted(true)
        setCommentButtonClick(false)
        setCommentLoading(false)
      })
      .catch((err) => {
        setError('Error posting comment. Please try again.')
        setCommentLoading(false)
      })
  }

  return (
    <form onSubmit={handleSubmit} className='commentForm'>
      <label>
        USERNAME:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </label>
      <label>
        COMMENT:
        <textarea value={body} onChange={(e) => setBody(e.target.value)} required />
      </label>
      <button type="submit" disabled={commentLoading}> 
        {commentLoading ? "POSTING COMMENT" : "SUBMIT"} 
      </button>
      {error && <p>{error}</p>}
    </form>
  )
}

export default CommentForm
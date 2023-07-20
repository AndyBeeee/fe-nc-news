import React, { useState } from 'react'
import { postComment } from './utils/api'
const hardcodedUsername = 'cooljmessy'

function CommentForm({ article_id, setComments, setCommentSubmitted, setCommentButtonClick }) {
  const [username, setUsername] = useState(hardcodedUsername)
  const [body, setBody] = useState('')
  const [error, setError] = useState(null)


  const handleSubmit = (e) => {
    e.preventDefault()
    postComment(article_id, hardcodedUsername, body)
      .then((newComment) => {
        setComments((currentComments) => [newComment, ...currentComments]);
        setUsername('')
        setBody('')
        setCommentSubmitted(true)
        setCommentButtonClick(false)
      })
      .catch((err) => {
        setError('Error posting comment. Please try again.')
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
      <button type="submit">SUBMIT</button>
      {error && <p>{error}</p>}
    </form>
  )
}

export default CommentForm
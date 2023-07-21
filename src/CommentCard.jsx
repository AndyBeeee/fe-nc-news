import React, { useState } from 'react'
import { deleteComment } from './utils/api'

function CommentCard({ comment, currentUser }) {
    const date = new Date(comment.created_at)
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear().toString().slice(-2)
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`
    const formattedDate = `${day}/${month}/${year}`
    const [isDeleted, setIsDeleted] = useState(false)
    const [deleteError, setDeleteError] = useState(null);

  
    const onDelete = () => {
      setIsDeleted(true)
      deleteComment(comment.comment_id)
        .catch((error) => {
          setIsDeleted(false)
          setDeleteError('Error deleting comment. Please try again.');        })
    }

    return (
      <div className={`commentCard ${isDeleted ? 'deleted' : ''}`}>
          <div className='commentCardColumn1'>
            <p>{comment.author}</p>
            <p>{formattedDate}</p>
            <p>{formattedTime}</p>
            <p>Votes: {comment.votes}</p>
          </div>
          <div className='commentCardColumn2'>
            <p>{comment.body}</p>
        {comment.author === currentUser && !isDeleted && <button className="deleteCommentBut" onClick={onDelete}>DELETE COMMENT </button>}
        {isDeleted && <button className="deleteCommentBut" disabled>COMMENT DELETED</button>}
        {deleteError && <p>{deleteError}</p>}
          </div>    
      </div>
    )
  }

export default CommentCard
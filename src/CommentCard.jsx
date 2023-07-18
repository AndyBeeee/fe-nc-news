import React from 'react'

function CommentCard({ comment }) {
    const date = new Date(comment.created_at)
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear().toString().slice(-2)
  
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`
    const formattedDate = `${day}/${month}/${year}`
  
    return (
      <div className='commentCard'>
          <div className='commentCardColumn1'>
            <p>{comment.author}</p>
            <p>{formattedDate}</p>
            <p>{formattedTime}</p>
          </div>
          <div className='commentCardColumn2'>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
          </div>
      </div>
    )
  }

export default CommentCard
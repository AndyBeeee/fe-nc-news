import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getTopics } from './utils/api'

function Topics() {
  const [topics, setTopics] = useState([])
  const [topicsLoading, setTopicsLoading] = useState(true)
  const [error, setError] = useState(false)


  useEffect(() => {
    getTopics()
        .then((topics) => {
        setTopics(topics)
        setTopicsLoading(false)
         })
        .catch((err) => {
         setError(true)
         setTopicsLoading(false)
        })
    }, [])

  if (topicsLoading) {
        return <h1>Loading Topics</h1>
  } else if (error) {
        return <h1>Error Loading Topics</h1>
  } else {
        return (
        <div className='topicButtons'>
          {topics.map((topic) => (
            <Link key={topic.slug} to={`/home/${topic.slug}`}>
            <button>{topic.slug}</button>
            <p>{topic.description}</p>
            </Link>
          ))}
         </div>
    )
  }
}

export default Topics
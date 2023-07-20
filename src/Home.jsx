import React from 'react'
import ArticleList from './ArticleList'
import { useParams } from 'react-router-dom'


function Home() {
  const { topic } = useParams()

  return (
    <div>
      <ArticleList topic={topic} />
    </div>
  )
}

export default Home
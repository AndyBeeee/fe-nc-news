import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Article from './Article'

function App() {
  return (
<div className='App'>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Home />} />
        <Route path="/articles/:article_id" element={<Article />} /> 
      </Routes>
      </div>
  )
}

export default App
import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="nav">
      <Link to="/articles">HOME</Link>
      <Link to="/topics">TOPICS</Link>
      <Link to="/articles">USER</Link>
      <Link to="/articles">POST</Link>
    </nav>
  )
}

export default Nav
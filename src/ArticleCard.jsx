import React from 'react';
import { Link } from 'react-router-dom';

function ArticleCard({ article }) {
  return (
    <div className="articleCard">
        <img src={article.article_img_url} alt="Article" />
        <div className="articleCardContent">
        <div className="articleCardRow1">
        <Link to={`/articles/${article.article_id}`}>
        <h2>{article.title}</h2>
        <p>{article.body.substring(0, 180) + "..."}</p>
        </Link>
    </div>
    <div className="articleCardRow2">
        <p>Author: {article.author}</p>
        <p>Topic: {article.topic}</p>
        <p>Votes: {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
    </div>
    </div>
    </div>
)}

export default ArticleCard
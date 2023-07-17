
function ArticleCard({ article }) {
  return (
    <div className="articleCard">
        <div className="articleCardRow">
        <h2>{article.title}</h2>
    </div>
    <div className="articleCardRow">
        <p>Author: {article.author}</p>
        <p>Topic: {article.topic}</p>
        <p>Votes: {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
    </div>
    </div>
)}

export default ArticleCard
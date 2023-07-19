import  { patchArticleVotes } from './api'

  export const handleVote = (article, article_id, voteChange, setArticle, setVoteMessage, hasVoted, setHasVoted) => {
    if (hasVoted) {
        return
    }

    const updatedArticle = {...article, votes: Number(article.votes) + voteChange}
    setArticle(updatedArticle)
    patchArticleVotes(article_id, voteChange)
    .then((updateFromServer) => {
        setArticle(updateFromServer)
        setHasVoted(true)
    })
    .catch((err) => {
        setArticle(article)
        setVoteMessage('Error processing your vote. Please try again.')
    })
}
import  { patchArticleVotes } from './api'

export const handleUpVote = (article_id, setArticle, setVoteStatus, setVoteMessage) => {
    const voteStatus = localStorage.getItem(`article-${article_id}`)
    if (voteStatus) {
        setVoteMessage('You have already voted')
    } else {
        setVoteStatus('voted')
        localStorage.setItem(`article-${article_id}`, 'upvoted')
        patchArticleVotes(article_id, 1)
        .then((updatedArticle) => {
        setArticle(updatedArticle)
        })
    }
  }
  
  export const handleDownVote = (article_id, setArticle, setVoteStatus, setVoteMessage) => {
    const voteStatus = localStorage.getItem(`article-${article_id}`)
    if (voteStatus) {
        setVoteMessage('You have already voted')
    } else {
        setVoteStatus('voted')
        localStorage.setItem(`article-${article_id}`, 'downvoted')
        patchArticleVotes(article_id, -1)
        .then((updatedArticle) => {
        setArticle(updatedArticle)
        })
    }
  }
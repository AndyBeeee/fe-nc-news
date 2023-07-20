import axios from 'axios'

const api = 'https://nc-news-42oi.onrender.com/api'

export const getArticles = () => {
    return axios.get(api + '/articles')
    .then((res) => {
    return res.data.articles;
    })
}

export const getArticle = (article_id) => {
    return axios.get(api + `/articles/${article_id}`)
    .then((res) => {
    return res.data.article
    })
}

export const getComments = (article_id) => {
    return axios.get(api + `/articles/${article_id}/comments`)
    .then((res) => {
    return res.data.comments;
    })
}

  
  export const patchArticleVotes = (article_id, inc_votes) => {
    return axios.patch(api + `/articles/${article_id}`, { inc_votes })
    .then((res) => {
    return res.data.article
    })
}

export const postComment = (article_id, username, body) => {
    return axios.post(api + `/articles/${article_id}/comments`, {username, body})
    .then((res) => {
    return res.data.comment
    })
}
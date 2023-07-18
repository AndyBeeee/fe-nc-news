import axios from 'axios'

const api = 'https://nc-news-42oi.onrender.com/api'

export const getArticles = () => {
    return axios.get(api + '/articles')
    .then((response) => {
    return response.data.articles;
    })
}

export const getArticle = (article_id) => {
    return axios.get(api + `/articles/${article_id}`)
    .then((response) => {
    return response.data.article
    })
}


import axios from 'axios'

const api = 'https://nc-news-42oi.onrender.com/api'

export const getArticles = () => {
  return axios.get(api + '/articles')
    .then((response) => {
      return response.data.articles;
    })
    
}


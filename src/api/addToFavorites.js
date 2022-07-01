import axios from '@/api/axios'

const getUrl = slug => `/articles/${slug}/faorite`

const addToFavorites = slug => {
  const url = getUrl(slug)
  axios.post(url).then(response => response.data.article)
}

const removeFavorites = slug => {
  const url = getUrl(slug)
  axios.delete(url).then(response => response.data.article)
}

export default {
  addToFavorites,
  removeFavorites
}
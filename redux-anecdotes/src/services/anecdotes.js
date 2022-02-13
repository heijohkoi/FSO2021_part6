import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const addLike = async (id, newObject) => {
  const url = `${baseUrl}/${id}`
  //console.log('url to like:', url)
  const response = await axios.put(url, newObject)
  return response.data
}

export default { getAll, createNew, addLike }

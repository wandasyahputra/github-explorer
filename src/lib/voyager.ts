import axios from 'axios'

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
}

const voyager = axios.create({
  baseURL: `${import.meta.env.VITE_GITHUB_API}`,
  headers
})

export default voyager

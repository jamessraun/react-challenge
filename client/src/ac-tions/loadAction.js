import axios from 'axios'

export const loadAction = () => {

  const response = axios.get('https://newsapi.org/v1/sources')

  return {
    type:'loadData',
    payload: response,
  }
}

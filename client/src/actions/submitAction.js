import axios from 'axios'

export const submitAction = (e,source) => {
  e.preventDefault()

  const response = axios.get(`https://newsapi.org/v1/articles?source=${source}&apiKey=2b8dc8cd0b964e7d87e5e805a531bc27`)

  return {
    type:'submitHandle',
    payload:response,
  };
}

import axios from 'axios'

export const loadAction = ( source ='' ) => {

  var type = ''
  var payload = []

  if(source){

    type = 'GET_DETAIL'
    payload = axios.get(`https://newsapi.org/v1/articles?source=${source}&apiKey=2b8dc8cd0b964e7d87e5e805a531bc27`)

  }else{
    console.log('masuk sini action---');
    type = 'GET_SOURCES'
    payload = axios.get('https://newsapi.org/v1/sources')
  }

  return {
    type,
    payload,
  }
}

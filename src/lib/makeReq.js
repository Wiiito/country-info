import axios from 'axios'

export default async function makeReq(id) {
  if (id) {
    console.log('id legal man')
  } else {
    var response = await axios.get('https://restcountries.eu/rest/v2/all')
    var data = response.data
    return data
  }
}
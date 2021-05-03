import axios from 'axios'

export default async function makeReq(id) {
  var response
  var data
  if (id) {
    response = await axios.get(`https://restcountries.eu/rest/v2/callingcode/${id}`)
    data = response.data
  } else {
    response = await axios.get('https://restcountries.eu/rest/v2/all')
    data = response.data
  }
  return data
}
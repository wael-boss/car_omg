import axios from 'axios'
export default axios.create({
  baseURL: 'https://car-data.p.rapidapi.com/cars',
  headers: {
    'X-RapidAPI-Key': '204c9e1f81msh7d59ffa394f26d2p191336jsnfbbaac2259cc',
    'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
  }
})
import axios from 'axios'

export class MovieService {
  constructor(){
    axios.defaults.baseURL = 'http://localhost:3000/api/'
  }

  getAll(){
    return axios.get('movies')
  }

  add(newMovie){
    return axios.post('movies', newMovie)

  }
}

const movieService = new MovieService()
export default movieService

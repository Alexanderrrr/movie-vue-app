import HttpService from './Http-service.js'

export class MovieService
{
  getAll(){
    return HttpService.get('movies')
    .then(({data}) => data);
  }

  add(newMovie){
    return HttpService.post('movies', newMovie)
  }
}

const movieService = new MovieService()
export default movieService

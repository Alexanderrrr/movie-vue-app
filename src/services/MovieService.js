import HttpService from './Http-service.js'

export class MovieService
{
  getAll(){
    return HttpService.get('movies')
    .then(({data}) => data);
  }

  add({title,director,imageUrl,duration,releaseDate,genre}){
    return HttpService.post('movies', {
      title,
      director,
      imageUrl,
      duration,
      releaseDate,
      genre
    })
  }
  login(email, password){
    return HttpService.post('/auth/login',{
      email,
      password
    }).then(({data}) => data);
  }

  register(name, email, password, password_confirmation){
    return HttpService.post('register', {
      name,
      email,
      password,
      password_confirmation
    }).then(({data}) => data);
  }

  setAuthHeaders(token){
    if (!token) {
      delete HttpService.defaults.headers.common['Authorization'];
      return;
    }
    HttpService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}
const checkForInitialToken = (authService) => {
  const token = localStorage.getItem('token');
  if (token) {
    authService.setAuthHeaders(token);
  }
}
const movieService = new MovieService()
checkForInitialToken(movieService)
export default movieService

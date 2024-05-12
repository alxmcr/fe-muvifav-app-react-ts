import { http, HttpResponse } from 'msw';
import mockPopularMovies from './data/mock-popular-movies.json';
import mockTopRatedMovies from './data/mock-top-rated-movies.json';
import mockUpcomingMovies from './data/mock-upcoming-movies.json';

export const handlers = [
  // Intercept "GET https://api.themoviedb.org/3/movie/popular" requests...
  http.get('https://api.themoviedb.org/3/movie/popular', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(mockPopularMovies);
  }),

  // Intercept "GET https://api.themoviedb.org/3/movie/top_rated" requests...
  http.get('https://api.themoviedb.org/3/movie/top_rated', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(mockTopRatedMovies);
  }),

  // Intercept "GET https://api.themoviedb.org/3/movie/upcoming" requests...
  http.get('https://api.themoviedb.org/3/movie/upcoming', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(mockUpcomingMovies);
  }),
];

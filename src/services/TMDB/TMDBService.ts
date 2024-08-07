import {
  ITMDBFindAllMoviesResponse,
  ITMDBFindAllUpcomingMoviesResponse,
  TMDBMovieData,
} from '../../@types/serviceTypes';
import { ITMDBService } from './ITMDBService';

export class TMDBService implements ITMDBService {
  private baseUrl: string;
  private apiAccessToken: string;
  private signal: AbortSignal;

  constructor(signalAS: AbortSignal) {
    this.baseUrl = `${import.meta.env.VITE_TMDB_API_BASE_URL}/${import.meta.env.VITE_TMDB_API_VERSION}`;
    this.apiAccessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
    this.signal = signalAS;
  }
  async findMovieById(idMovie = 1): Promise<TMDBMovieData> {
    const endpoint = `movie`;

    const options: RequestInit = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${this.apiAccessToken}`,
      },
      signal: this.signal,
    };

    // https://api.themoviedb.org/3/movie/<ID_MOVIE>
    const response: Response = await fetch(`${this.baseUrl}/${endpoint}/${idMovie}`, options);

    if (response.status === 200) {
      return response.json();
    }

    return Promise.reject(response);
  }
  async findAllUpcomingMoviesByPage(pageNumber = 1): Promise<ITMDBFindAllUpcomingMoviesResponse> {
    const endpoint = `movie/upcoming`;

    const options: RequestInit = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${this.apiAccessToken}`,
      },
      signal: this.signal,
    };

    const queryParams = `language=en-US&page=${pageNumber}&sort_by=created_at.asc`;
    // https://api.themoviedb.org/3/movie/upcoming?api_key=<API_KEY>&page=1
    const response: Response = await fetch(`${this.baseUrl}/${endpoint}?${queryParams}`, options);

    if (response.status === 200) {
      return response.json();
    }

    return Promise.reject(response);
  }

  async findAllTopRatedMoviesByPage(pageNumber = 1): Promise<ITMDBFindAllMoviesResponse> {
    const endpoint = `movie/top_rated`;

    const options: RequestInit = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${this.apiAccessToken}`,
      },
      signal: this.signal,
    };

    const queryParams = `language=en-US&page=${pageNumber}&sort_by=created_at.asc`;
    // https://api.themoviedb.org/3/movie/top_rated?api_key=<API_KEY>&page=1
    const response: Response = await fetch(`${this.baseUrl}/${endpoint}?${queryParams}`, options);

    if (response.status === 200) {
      return response.json();
    }

    return Promise.reject(response);
  }

  async findAllPopularMoviesByPage(pageNumber = 1): Promise<ITMDBFindAllMoviesResponse> {
    const endpoint = `movie/popular`;

    const options: RequestInit = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${this.apiAccessToken}`,
      },
      signal: this.signal,
    };

    const queryParams = `language=en-US&page=${pageNumber}&sort_by=created_at.asc`;
    // https://api.themoviedb.org/3/movie/popular?api_key=<API_KEY>&page=1
    const response: Response = await fetch(`${this.baseUrl}/${endpoint}?${queryParams}`, options);

    if (response.status === 200) {
      return response.json();
    }

    return Promise.reject(response);
  }
}

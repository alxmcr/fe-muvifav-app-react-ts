import { ITMDBFindAllResponse } from '../../@types/serviceTypes';
import { ITMDBService } from './ITMDBService';

export class TMDBService implements ITMDBService {
  private baseUrl: string;
  private apiAccessToken: string;

  constructor() {
    this.baseUrl = `${import.meta.env.VITE_TMDB_API_BASE_URL}/${import.meta.env.VITE_TMDB_API_VERSION}`;
    this.apiAccessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
  }
  async findAllUpcomingMoviesByPage(pageNumber = 1): Promise<ITMDBFindAllResponse> {
    const endpoint = `movie/upcoming`;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${this.apiAccessToken}`,
      },
    };

    const queryParams = `language=en-US&page=${pageNumber}&sort_by=created_at.asc`;

    const response: Response = await fetch(`${this.baseUrl}/${endpoint}?${queryParams}`, options);

    if (response.status === 200) {
      return response.json();
    }

    return Promise.reject(response);
  }

  async findAllTopRatedMoviesByPage(pageNumber = 1): Promise<ITMDBFindAllResponse> {
    const endpoint = `movie/top_rated`;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${this.apiAccessToken}`,
      },
    };

    const queryParams = `language=en-US&page=${pageNumber}&sort_by=created_at.asc`;

    const response: Response = await fetch(`${this.baseUrl}/${endpoint}?${queryParams}`, options);

    if (response.status === 200) {
      return response.json();
    }

    return Promise.reject(response);
  }

  async findAllPopularMoviesByPage(pageNumber = 1): Promise<ITMDBFindAllResponse> {
    const endpoint = `movie/popular`;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${this.apiAccessToken}`,
      },
    };

    const queryParams = `language=en-US&page=${pageNumber}&sort_by=created_at.asc`;

    const response: Response = await fetch(`${this.baseUrl}/${endpoint}?${queryParams}`, options);

    if (response.status === 200) {
      return response.json();
    }

    return Promise.reject(response);
  }
}

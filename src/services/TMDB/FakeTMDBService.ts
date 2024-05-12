import { ITMDBFindAllMoviesResponse, ITMDBFindAllUpcomingMoviesResponse, TMDBMovieData } from '../../@types/serviceTypes';
import { ITMDBService } from './ITMDBService';

export class FakeTMDBService implements ITMDBService {
  async findMovieById(idMovie = 1): Promise<TMDBMovieData> {
    
  }
  async findAllUpcomingMoviesByPage(pageNumber = 1): Promise<ITMDBFindAllUpcomingMoviesResponse> {
    
  }

  async findAllTopRatedMoviesByPage(pageNumber = 1): Promise<ITMDBFindAllMoviesResponse> {
   
  }

  async findAllPopularMoviesByPage(pageNumber = 1): Promise<ITMDBFindAllMoviesResponse> {
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

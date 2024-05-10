import { ITMDBFindAllResponse } from '../../@types/serviceTypes';
import { ITMDBService } from './ITMDBService';

export class TMDBService implements ITMDBService {
  private baseUrl: string;

  constructor() {
    console.log('import.meta.env.', import.meta.env);

    this.baseUrl = `${import.meta.env.VITE_TMDB_API_BASE_URL}/${import.meta.env.VITE_TMDB_API_VERSION}/account/${import.meta.env.VITE_TMDB_ACCOUNT}`;
  }

  async findAllFavoriteMoviesByPage(pageNumber = 1): Promise<ITMDBFindAllResponse> {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    };

    const endpoint = `favorite/movies`;
    const queryParams = `language=en-US&page=${pageNumber}&sort_by=created_at.asc`;

    const response: Response = await fetch(`${this.baseUrl}/${endpoint}?${queryParams}`, options);

    if (response.status === 200) {
      return response.json();
    }

    return Promise.reject(response);
  }
}

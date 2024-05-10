import { ITMDBFindAllResponse } from '../../@types/serviceTypes';

export interface ITMDBService {
  findFavoriteMovies(pageNumber: number): Promise<ITMDBFindAllResponse>;
}

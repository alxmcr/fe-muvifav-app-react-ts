import { ITMDBFindAllResponse } from '../../@types/serviceTypes';

export interface ITMDBService {
  findAllFavoriteMoviesByPage(pageNumber: number): Promise<ITMDBFindAllResponse>;
}

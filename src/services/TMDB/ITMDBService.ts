import { ITMDBFindAllResponse } from '../../@types/serviceTypes';

export interface ITMDBService {
  findAllPopularMoviesByPage(pageNumber: number): Promise<ITMDBFindAllResponse>;
  findAllTopRatedMoviesByPage(pageNumber: number): Promise<ITMDBFindAllResponse>;
}

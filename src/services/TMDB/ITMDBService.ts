import { ITMDBFindAllMoviesResponse, TMDBMovieData } from '../../@types/serviceTypes';

export interface ITMDBService {
  findMovieById(idMovie: number): Promise<TMDBMovieData>;
  findAllPopularMoviesByPage(pageNumber: number): Promise<ITMDBFindAllMoviesResponse>;
  findAllTopRatedMoviesByPage(pageNumber: number): Promise<ITMDBFindAllMoviesResponse>;
  findAllUpcomingMoviesByPage(pageNumber: number): Promise<ITMDBFindAllMoviesResponse>;
}

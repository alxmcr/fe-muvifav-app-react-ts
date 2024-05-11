import React from 'react';
import { TMDBMovieData } from '../@types/serviceTypes';
import { LoadingStates } from '../@types/serviceEnums';
import { TMDBService } from '../services/TMDB/TMDBService';

export default function useTopRatedMovies(pageNumber = 1) {
  const [popularMovies, setTopRatedMovies] = React.useState<TMDBMovieData[]>([]);
  const [totalResults, setTotalResults] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(1);
  const [statusTopRatedMovies, setStatusTopRatedMovies] = React.useState(LoadingStates.IDLE);
  const [errorTopRatedMovies, setErrorTopRatedMovies] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const fetchFavMovies = async () => {
      try {
        const service = new TMDBService();

        // Request
        setStatusTopRatedMovies(LoadingStates.PENDING);
        const response = await service.findAllTopRatedMoviesByPage(pageNumber);
        // update state
        setTotalPages(response.total_pages);
        setTotalResults(response.total_results);
        setTopRatedMovies(response.results);
        setStatusTopRatedMovies(LoadingStates.SUCCESS);
      } catch (error) {
        if (error instanceof Error) {
          setErrorTopRatedMovies(error);
          setStatusTopRatedMovies(LoadingStates.ERROR);
        }
      }
    };

    fetchFavMovies();
  }, [pageNumber]);

  return { popularMovies, totalResults, totalPages, errorTopRatedMovies, statusTopRatedMovies };
}

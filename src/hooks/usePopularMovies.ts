import React from 'react';
import { TMDBMovieData } from '../@types/serviceTypes';
import { LoadingStates } from '../@types/serviceEnums';
import { TMDBService } from '../services/TMDB/TMDBService';

export default function usePopularMovies(pageNumber = 1) {
  const [popularMovies, setPopularMovies] = React.useState<TMDBMovieData[]>([]);
  const [totalResults, setTotalResults] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(1);
  const [statusPopularMovies, setStatusPopularMovies] = React.useState(LoadingStates.IDLE);
  const [errorPopularMovies, setErrorPopularMovies] = React.useState<Error | null>(null);

  React.useEffect(() => {
    let controller: AbortController | null = null;

    const fetchFavMovies = async () => {
      try {
        controller = new AbortController();
        const signal: AbortSignal = controller.signal;
        const service = new TMDBService(signal);
        // Request
        setStatusPopularMovies(LoadingStates.PENDING);
        const response = await service.findAllPopularMoviesByPage(pageNumber);
        console.log('🚀 ~ fetchFavMovies ~ response:', response);
        // update state
        setTotalPages(response.total_pages);
        setTotalResults(response.total_results);
        setPopularMovies(response.results);
        setStatusPopularMovies(LoadingStates.SUCCESS);
      } catch (error) {
        if (error instanceof Error) {
          setErrorPopularMovies(error);
          setStatusPopularMovies(LoadingStates.ERROR);
        }
      }
    };

    fetchFavMovies();

    return () => {
      if (controller !== null) {
        controller.abort();
      }
    };
  }, [pageNumber]);

  return { popularMovies, totalResults, totalPages, errorPopularMovies, statusPopularMovies };
}

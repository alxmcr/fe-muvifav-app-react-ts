import React from 'react';
import { TMDBMovieData } from '../@types/serviceTypes';
import { LoadingStates } from '../@types/serviceEnums';
import { TMDBService } from '../services/TMDB/TMDBService';

export default function useTopRatedMovies(pageNumber = 1) {
  const [topRatedMovies, setTopRatedMovies] = React.useState<TMDBMovieData[]>([]);
  const [totalResults, setTotalResults] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(1);
  const [statusTopRatedMovies, setStatusTopRatedMovies] = React.useState(LoadingStates.IDLE);
  const [errorTopRatedMovies, setErrorTopRatedMovies] = React.useState<Error | null>(null);

  React.useEffect(() => {
    let controller: AbortController | null = null;

    const fetchFavMovies = async () => {
      try {
        controller = new AbortController();
        const signal: AbortSignal = controller.signal;
        const service = new TMDBService(signal);
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

    return () => {
      if (controller !== null) {
        controller.abort();
      }
    };
  }, [pageNumber]);

  return { topRatedMovies, totalResults, totalPages, errorTopRatedMovies, statusTopRatedMovies };
}

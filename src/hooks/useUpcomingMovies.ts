import React from 'react';
import { TMDBMovieData } from '../@types/serviceTypes';
import { LoadingStates } from '../@types/serviceEnums';
import { TMDBService } from '../services/TMDB/TMDBService';

export default function useUpcomingMovies(pageNumber = 1) {
  const [upcomingMovies, setUpcomingMovies] = React.useState<TMDBMovieData[]>([]);
  const [totalResults, setTotalResults] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(1);
  const [dateMax, setDateMax] = React.useState('');
  const [dateMin, setDateMin] = React.useState('');
  const [statusUpcomingMovies, setStatusUpcomingMovies] = React.useState(LoadingStates.IDLE);
  const [errorUpcomingMovies, setErrorUpcomingMovies] = React.useState<Error | null>(null);

  React.useEffect(() => {
    let controller: AbortController | null = null;

    const fetchFavMovies = async () => {
      try {
        controller = new AbortController();
        const signal: AbortSignal = controller.signal;
        const service = new TMDBService(signal);

        // Request
        setStatusUpcomingMovies(LoadingStates.PENDING);
        const response = await service.findAllUpcomingMoviesByPage(pageNumber);
        // update state
        setTotalPages(response.total_pages);
        setTotalResults(response.total_results);
        setUpcomingMovies(response.results);
        setDateMax(response?.dates?.maximum);
        setDateMin(response?.dates?.minimum);
        setStatusUpcomingMovies(LoadingStates.SUCCESS);
      } catch (error) {
        if (error instanceof Error) {
          setErrorUpcomingMovies(error);
          setStatusUpcomingMovies(LoadingStates.ERROR);
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

  return {
    upcomingMovies,
    dateMin,
    dateMax,
    totalResults,
    totalPages,
    errorUpcomingMovies,
    statusUpcomingMovies,
  };
}

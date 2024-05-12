import React from 'react';
import { TMDBMovieData } from '../@types/serviceTypes';
import { LoadingStates } from '../@types/serviceEnums';
import { TMDBService } from '../services/TMDB/TMDBService';

export default function useMovie(idMovie = 1) {
  const [movie, setMovie] = React.useState<TMDBMovieData | null>(null);
  const [errorMovie, setErrorMovie] = React.useState<Error | null>(null);
  const [statusLoadingMovie, setStatusLoadingMovie] = React.useState(LoadingStates.IDLE);

  React.useEffect(() => {
    let controller: AbortController | null = null;

    const fetchMovie = async (id = 0) => {
      try {
        controller = new AbortController();
        const signal: AbortSignal = controller.signal;
        const service = new TMDBService(signal);

        // Request
        setStatusLoadingMovie(LoadingStates.PENDING);
        const response = await service.findMovieById(id);
        // update state
        setMovie(response);
        setStatusLoadingMovie(LoadingStates.SUCCESS);
      } catch (error) {
        if (error instanceof Error) {
          setErrorMovie(error);
          setStatusLoadingMovie(LoadingStates.ERROR);
        }
      }
    };

    fetchMovie(idMovie);

    return () => {
      if (controller !== null) {
        controller.abort();
      }
    };
  }, [idMovie]);

  return { movie, errorMovie, statusLoadingMovie };
}

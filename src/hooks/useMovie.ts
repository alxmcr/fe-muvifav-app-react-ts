import React from 'react';
import { TMDBMovieData } from '../@types/serviceTypes';
import { LoadingStates } from '../@types/serviceEnums';
import { TMDBService } from '../services/TMDB/TMDBService';

export default function useMovie(idMovie = 1) {
  const [movie, setMovie] = React.useState<TMDBMovieData | null>(null);
  const [errorMovie, setErrorMovie] = React.useState<Error | null>(null);
  const [statusLoadingMovie, setStatusLoadingMovie] = React.useState(LoadingStates.IDLE);

  React.useEffect(() => {
    const fetchMovie = async (id = 0) => {
      try {
        const service = new TMDBService();

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
  }, [idMovie]);

  return { movie, errorMovie, statusLoadingMovie };
}

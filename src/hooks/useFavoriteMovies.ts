import React from 'react';
import { TMDBMovieData } from '../@types/serviceTypes';
import { LoadingStates } from '../@types/serviceEnums';
import { TMDBService } from '../services/TMDB/TMDBService';

export default function useFavoriteMovies(pageNumber = 1) {
  const [favMovies, setFavMovies] = React.useState<TMDBMovieData[]>([]);
  const [totalResults, setTotalResults] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(1);
  const [statusFavMovies, setStatusFavMovies] = React.useState(LoadingStates.IDLE);
  const [errorFavMovies, setErrorFavMovies] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const fetchFavMovies = async () => {
      try {
        const service = new TMDBService();

        // Request
        setStatusFavMovies(LoadingStates.PENDING);
        const response = await service.findAllFavoriteMoviesByPage(pageNumber);
        console.log("🚀 ~ fetchFavMovies ~ response:", response)
        setTotalPages(response.total_pages);
        setTotalResults(response.total_results);
        setFavMovies(response.results);
        setStatusFavMovies(LoadingStates.SUCCESS);
      } catch (error) {
        console.log("🚀 ~ fetchFavMovies ~ error:", error)
        if (error instanceof Error) {
          setErrorFavMovies(error);
          setStatusFavMovies(LoadingStates.ERROR);
        }
      }
    };

    fetchFavMovies();
  }, [pageNumber]);

  return { favMovies, totalResults, totalPages, errorFavMovies, statusFavMovies };
}

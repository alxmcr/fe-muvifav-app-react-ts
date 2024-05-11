import { TMDBMovieData } from '../@types/serviceTypes';

type Props = {
  movie: TMDBMovieData;
};

export default function PosterMovie({ movie }: Props) {
  if (movie === null || movie === undefined) {
    return <img src="/poster-movie.png" alt="Default poster movie" />;
  }

  if (movie.poster_path === null || movie.poster_path === undefined || movie.poster_path === '') {
    return <img src="/poster-movie.png" alt="Default poster movie" />;
  }

  return <img src={movie.poster_path} alt={`${movie.title}'s poster`} />;
}

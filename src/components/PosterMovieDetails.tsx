import { TMDBMovieData } from '../@types/serviceTypes';

type Props = {
  movie: TMDBMovieData;
  posterSize: 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original';
};

export default function PosterMovieDetails({ movie, posterSize = 'w500' }: Props) {
  if (movie === null || movie === undefined) {
    return (
      <img
        src="/poster-movie.png"
        alt="Default poster movie"
        className="hidden h-[250px] w-[156px] md:flex"
      />
    );
  }

  if (movie.poster_path === null || movie.poster_path === undefined || movie.poster_path === '') {
    return (
      <img
        src="/poster-movie.png"
        alt="Default poster movie"
        className="hidden h-[250px] w-[156px] md:flex"
      />
    );
  }

  return (
    <img
      src={`https://image.tmdb.org/t/p/${posterSize}/${movie?.poster_path}`}
      alt={`${movie.title}'s poster`}
      className="hidden h-[250px] w-[156px] hover:border hover:border-daisy-400 md:flex"
    />
  );
}

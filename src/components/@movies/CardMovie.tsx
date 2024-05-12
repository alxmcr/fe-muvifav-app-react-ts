import { TMDBMovieData } from '../../@types/serviceTypes';
import PosterMovie from '../PosterMovie';

type Props = {
  movie: TMDBMovieData;
};

export default function CardMovie({ movie }: Props) {
  if (movie === null || movie === undefined) {
    return null;
  }

  return (
    <article>
      <PosterMovie movie={movie} posterSize="w500" />
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </article>
  );
}

import { TMDBMovieData } from '../../@types/serviceTypes';
import PosterMovieDetails from '../PosterMovieDetails';

type Props = {
  movie: TMDBMovieData;
};

export default function CardMovieDetails({ movie }: Props) {
  if (movie === null || movie === undefined) {
    return null;
  }

  return (
    <article className='grid '>
      <PosterMovieDetails movie={movie} posterSize="w500" />
      <div className="flex flex-col">
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
      </div>
    </article>
  );
}

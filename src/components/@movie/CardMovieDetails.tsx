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
    <article className="relative grid rounded-lg p-4 md:grid-cols-2">
      <PosterMovieDetails movie={movie} posterSize="w500" />
      <div className="flex flex-col gap-2">
        <h3 className="font-rowdies text-[1.3rem] font-bold">{movie.title}</h3>
        <p className="font-groteskspace">{movie.overview}</p>
      </div>
    </article>
  );
}

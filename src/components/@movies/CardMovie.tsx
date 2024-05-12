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
    <article className="flex min-w-[150px] flex-col gap-4">
      <PosterMovie movie={movie} posterSize="w500" />
      <div className="flex flex-col gap-1">
        <h3 className="h-[45px] font-rowdies font-bold text-golden-300">{movie.title}</h3>
        <p className="text-light-200">{movie.release_date}</p>
      </div>
    </article>
  );
}

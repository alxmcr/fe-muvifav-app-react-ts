import { TMDBMovieData } from '../../@types/serviceTypes';
import Icon24x24Star from '../@icons/24x24/Icon24x24Star';
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
        <h3 className="min-h-[45px] font-groteskspace font-bold text-light-50">{movie.title}</h3>
        <p className="flex items-center text-golden-300">
          <Icon24x24Star />
          <span>{movie.vote_average}</span>
        </p>
      </div>
    </article>
  );
}

import { TMDBMovieData } from '../../@types/serviceTypes';
import Icon22x22CircleClose from '../@icons/22x22/Icon22x22CircleClose';
import PosterMovieDetails from '../PosterMovieDetails';

type Props = {
  movie: TMDBMovieData;
  closeDialog: () => void;
};

export default function CardMovieDetails({ movie }: Props) {
  if (movie === null || movie === undefined) {
    return null;
  }

  return (
    <article className="relative grid">
      <span className="absolute right-2 top-2">
        <Icon22x22CircleClose />
      </span>
      <PosterMovieDetails movie={movie} posterSize="w500" />
      <div className="flex flex-col">
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
      </div>
    </article>
  );
}

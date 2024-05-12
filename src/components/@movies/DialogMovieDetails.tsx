import { TMDBMovieData } from '../../@types/serviceTypes';
import CardMovieDetails from './CardMovieDetails';

type Props = {
  movie: TMDBMovieData;
};

export default function DialogMovieDetails({ movie }: Props) {
  if (movie === null || movie === undefined) {
    return null;
  }

  return (
    <dialog>
      <CardMovieDetails movie={movie} />
    </dialog>
  );
}

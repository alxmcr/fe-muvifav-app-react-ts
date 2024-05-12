import { TMDBMovieData } from '../../@types/serviceTypes';
import CardMovie from './CardMovie';

type Props = {
  movies: TMDBMovieData[];
};

export default function GroupCardsMovie({ movies = [] }: Props) {
  return (
    <div>
      {movies.map((movie) => (
        <CardMovie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
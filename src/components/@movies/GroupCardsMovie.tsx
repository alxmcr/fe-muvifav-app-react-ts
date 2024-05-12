import { TMDBMovieData } from '../../@types/serviceTypes';
import CardMovie from './CardMovie';

type Props = {
  movies: TMDBMovieData[];
};

export default function GroupCardsMovie({ movies = [] }: Props) {
  return (
    <div className="scrollbar-app flex items-center gap-4 overflow-x-auto">
      {movies.map((movie) => (
        <CardMovie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

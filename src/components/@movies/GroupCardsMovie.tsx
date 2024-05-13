import { TMDBMovieData } from '../../@types/serviceTypes';
import CardMovie from '../@movie/CardMovie';

type Props = {
  movies: TMDBMovieData[];
};

export default function GroupCardsMovie({ movies = [] }: Props) {
  return (
    <div className="scrollbar-app flex items-center gap-4 overflow-x-auto py-4">
      {movies.map((movie) => (
        <CardMovie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

import { TMDBMovieData } from '../../@types/serviceTypes';
import GroupCardsMovie from './GroupCardsMovie';

type Props = {
  movies: TMDBMovieData[];
};

export default function BoxGroupCardsMovie({ movies = [] }: Props) {
  if (movies.length === 0) {
    return (
      <div>
        <h3>No movies</h3>
      </div>
    );
  }

  return (
    <div>
      <GroupCardsMovie movies={movies} />
    </div>
  );
}

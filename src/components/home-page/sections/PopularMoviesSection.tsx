import { TMDBMovieData } from '../../../@types/serviceTypes';
import GroupCardsMovie from '../../@movies/GroupCardsMovie';

export default function PopularMoviesSection() {
  const movies: TMDBMovieData[] = [];

  return (
    <section>
      <h2>Popular</h2>
      <GroupCardsMovie movies={movies} />
    </section>
  );
}

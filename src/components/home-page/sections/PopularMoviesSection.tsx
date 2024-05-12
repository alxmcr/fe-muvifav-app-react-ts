import React from 'react';
import { LoadingStates } from '../../../@types/serviceEnums';
import usePopularMovies from '../../../hooks/usePopularMovies';
import GroupCardsMovie from '../../@movies/GroupCardsMovie';

export default function PopularMoviesSection() {
  const [pageNumber, setPageNumber] = React.useState(1);
  const { popularMovies, errorPopularMovies, statusPopularMovies, totalPages } = usePopularMovies(pageNumber);

  const handlePrevPage = () => setPageNumber((prevPageNumber) => prevPageNumber - 1);
  const handleNextPage = () => setPageNumber((prevPageNumber) => prevPageNumber + 1);

  if (LoadingStates.PENDING === statusPopularMovies) {
    return (
      <section>
        <h2>Popular</h2>
        <p>Loading movies...</p>
      </section>
    );
  }

  if (LoadingStates.ERROR === statusPopularMovies && errorPopularMovies) {
    return (
      <section>
        <h2>Popular</h2>
        <p>{errorPopularMovies.message}</p>
      </section>
    );
  }

  return (
    <section className="bg-light-950">
      <header>
        <h2 className="text-[2rem] text-golden-300">Popular</h2>
        <div>
          <button onClick={handlePrevPage}>Prev</button>
          <p>
            {pageNumber}/{totalPages}
          </p>
          <button onClick={handleNextPage}>Next</button>
        </div>
      </header>
      <GroupCardsMovie movies={popularMovies} />
    </section>
  );
}

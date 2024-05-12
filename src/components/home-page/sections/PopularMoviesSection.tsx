import React from 'react';
import { LoadingStates } from '../../../@types/serviceEnums';
import usePopularMovies from '../../../hooks/usePopularMovies';
import GroupCardsMovie from '../../@movies/GroupCardsMovie';
import HeaderSectionMovies from '../HeaderSectionMovies';

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
      <div className="flex flex-col gap-4 p-4 md:w-full md:px-10 lg:mx-auto lg:w-[1028px] lg:px-0">
        <HeaderSectionMovies
          title="Popular"
          pageNumber={pageNumber}
          totalPages={totalPages}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
        <GroupCardsMovie movies={popularMovies} />
      </div>
    </section>
  );
}

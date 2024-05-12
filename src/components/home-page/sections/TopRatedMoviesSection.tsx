import React from 'react';
import { LoadingStates } from '../../../@types/serviceEnums';
import useTopRatedMovies from '../../../hooks/useTopRatedMovies';
import Icon44x44ArrowLeft from '../../@icons/44x44/Icon44x44ArrowLeft';
import Icon44x44ArrowRight from '../../@icons/44x44/Icon44x44ArrowRight';
import GroupCardsMovie from '../../@movies/GroupCardsMovie';

export default function TopRatedMoviesSection() {
  const [pageNumber, setPageNumber] = React.useState(1);
  const { topRatedMovies, errorTopRatedMovies, statusTopRatedMovies, totalPages } =
    useTopRatedMovies(pageNumber);

  const handlePrevPage = () => setPageNumber((prevPageNumber) => prevPageNumber - 1);
  const handleNextPage = () => setPageNumber((prevPageNumber) => prevPageNumber + 1);

  if (LoadingStates.PENDING === statusTopRatedMovies) {
    return (
      <section>
        <h2>Popular</h2>
        <p>Loading movies...</p>
      </section>
    );
  }

  if (LoadingStates.ERROR === statusTopRatedMovies && errorTopRatedMovies) {
    return (
      <section>
        <h2>Popular</h2>
        <p>{errorTopRatedMovies.message}</p>
      </section>
    );
  }

  return (
    <section className="bg-light-950">
      <div className="flex flex-col gap-4 p-4 md:w-full md:px-10 lg:mx-auto lg:w-[1028px] lg:px-0">
        <header className="flex items-center justify-between">
          <h2 className="font-rowdies text-[2.5rem] font-bold text-golden-300">Popular</h2>
          <div className="flex items-center justify-between gap-2 text-golden-300">
            <button onClick={handlePrevPage}>
              <Icon44x44ArrowLeft />
            </button>
            <p className="text-light-50">
              {pageNumber}/{totalPages}
            </p>
            <button onClick={handleNextPage}>
              <Icon44x44ArrowRight />
            </button>
          </div>
        </header>
        <GroupCardsMovie movies={topRatedMovies} />
      </div>
    </section>
  );
}

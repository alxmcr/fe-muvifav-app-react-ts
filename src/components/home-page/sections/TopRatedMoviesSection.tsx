import React from 'react';
import { LoadingStates } from '../../../@types/serviceEnums';
import useTopRatedMovies from '../../../hooks/useTopRatedMovies';
import GroupCardsMovie from '../../@movies/GroupCardsMovie';
import HeaderSectionMovies from '../HeaderSectionMovies';

export default function TopRatedMoviesSection() {
  const [pageNumber, setPageNumber] = React.useState(1);
  const { topRatedMovies, errorTopRatedMovies, statusTopRatedMovies, totalPages } =
    useTopRatedMovies(pageNumber);

  const handlePrevPage = () => setPageNumber((prevPageNumber) => prevPageNumber - 1);
  const handleNextPage = () => setPageNumber((prevPageNumber) => prevPageNumber + 1);

  if (LoadingStates.PENDING === statusTopRatedMovies) {
    return (
      <section className="bg-light-950">
        <div className="flex flex-col gap-4 p-4 md:h-[500px] md:w-full md:px-10 lg:mx-auto lg:w-[1028px] lg:px-0">
          <HeaderSectionMovies
            title="Top Rated"
            pageNumber={pageNumber}
            totalPages={totalPages}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
          <div className="flex h-full items-center justify-center">
            <p className="text-golden-300">Loading top rated movies...</p>
          </div>
        </div>
      </section>
    );
  }

  if (LoadingStates.ERROR === statusTopRatedMovies && errorTopRatedMovies) {
    return (
      <section className="bg-light-950">
        <div className="flex flex-col gap-4 p-4 md:h-[500px] md:w-full md:px-10 lg:mx-auto lg:w-[1028px] lg:px-0">
          <HeaderSectionMovies
            title="Top Rated"
            pageNumber={pageNumber}
            totalPages={totalPages}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
          <div className="h-full">
            <p className="text-golden-300">{errorTopRatedMovies.message}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-light-950">
      <div className="flex flex-col gap-4 p-4 md:h-[500px] md:w-full md:px-10 lg:mx-auto lg:w-[1028px] lg:px-0">
        <HeaderSectionMovies
          title="Top Rated"
          pageNumber={pageNumber}
          totalPages={totalPages}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
        <GroupCardsMovie movies={topRatedMovies} />
      </div>
    </section>
  );
}

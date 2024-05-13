import React from 'react';
import { LoadingStates } from '../../../@types/serviceEnums';
import useUpcomingMovies from '../../../hooks/useUpcomingMovies';
import GroupCardsMovie from '../../@movies/GroupCardsMovie';
import HeaderSectionMovies from '../HeaderSectionMovies';

export default function UpcomingMoviesSection() {
  const [pageNumber, setPageNumber] = React.useState(1);
  const { upcomingMovies, errorUpcomingMovies, statusUpcomingMovies, totalPages } =
    useUpcomingMovies(pageNumber);

  const handlePrevPage = () => setPageNumber((prevPageNumber) => prevPageNumber - 1);
  const handleNextPage = () => setPageNumber((prevPageNumber) => prevPageNumber + 1);

  if (LoadingStates.PENDING === statusUpcomingMovies) {
    return (
      <section className="bg-light-950">
        <div className="flex flex-col gap-4 p-4 md:h-[500px] md:w-full md:px-10 lg:mx-auto lg:w-[1028px] lg:px-0">
          <HeaderSectionMovies
            title="Upcoming"
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

  if (LoadingStates.ERROR === statusUpcomingMovies && errorUpcomingMovies) {
    return (
      <section className="bg-light-950">
        <div className="flex flex-col gap-4 p-4 md:h-[500px] md:w-full md:px-10 lg:mx-auto lg:w-[1028px] lg:px-0">
          <HeaderSectionMovies
            title="Upcoming"
            pageNumber={pageNumber}
            totalPages={totalPages}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
          <div className="h-full">
            <p className="text-golden-300">{errorUpcomingMovies.message}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-light-950">
      <div className="flex flex-col gap-4 p-4 md:h-[500px] md:w-full md:px-10 lg:mx-auto lg:w-[1028px] lg:px-0">
        <HeaderSectionMovies
          title="Upcoming"
          pageNumber={pageNumber}
          totalPages={totalPages}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
        <GroupCardsMovie movies={upcomingMovies} />
      </div>
    </section>
  );
}

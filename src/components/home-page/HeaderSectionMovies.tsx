import ArrowActionsMovies from './ArrowActionsMovies';

type Props = {
  title: string;
  pageNumber: number;
  totalPages: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
};

export default function HeaderSectionMovies({
  title = '',
  pageNumber = 1,
  totalPages = 1,
  handlePrevPage,
  handleNextPage,
}: Props) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-2">
      <h2 className="font-rowdies text-[1.8rem] font-bold text-golden-300">{title}</h2>
      <ArrowActionsMovies
        pageNumber={pageNumber}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </header>
  );
}

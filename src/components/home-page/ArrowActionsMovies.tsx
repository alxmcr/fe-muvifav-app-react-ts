import Icon44x44ArrowLeft from '../@icons/44x44/Icon44x44ArrowLeft';
import Icon44x44ArrowRight from '../@icons/44x44/Icon44x44ArrowRight';

type Props = {
  pageNumber: number;
  totalPages: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
};

export default function ArrowActionsMovies({
  pageNumber = 1,
  totalPages = 1,
  handlePrevPage,
  handleNextPage,
}: Props) {
  return (
    <div className="flex items-center justify-between gap-2 text-golden-300">
      <button onClick={handlePrevPage} className="md:hover:text-daisy-500">
        <Icon44x44ArrowLeft />
      </button>
      <p className="text-light-50">{`${pageNumber} / ${totalPages}`}</p>
      <button onClick={handleNextPage} className="md:hover:text-daisy-500">
        <Icon44x44ArrowRight />
      </button>
    </div>
  );
}

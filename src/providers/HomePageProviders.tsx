import DialogMovieSelectedProvider from './DialogMovieSelectedProvider';
import MovieSelectedProvider from './MovieSelectedProvider';

type Props = {
  children: React.ReactNode;
};

export default function HomePageProviders({ children }: Props) {
  return (
    <MovieSelectedProvider>
      <DialogMovieSelectedProvider>{children}</DialogMovieSelectedProvider>
    </MovieSelectedProvider>
  );
}

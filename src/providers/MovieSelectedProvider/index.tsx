import React from 'react';
import { MovieSelectedContext, SetMovieSelectedContext } from './MovieSelectedContext';
import { TMDBMovieData } from '../../@types/serviceTypes';

type Props = {
  children: React.ReactNode;
};

export default function MovieSelectedProvider({ children }: Props) {
  const [movieSelected, setMovieSelected] = React.useState<TMDBMovieData | null>(null);

  return (
    <MovieSelectedContext.Provider value={movieSelected}>
      <SetMovieSelectedContext.Provider value={setMovieSelected}>{children}</SetMovieSelectedContext.Provider>
    </MovieSelectedContext.Provider>
  );
}

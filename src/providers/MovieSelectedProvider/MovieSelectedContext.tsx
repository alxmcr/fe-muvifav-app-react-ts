import React from 'react';
import { TMDBMovieData } from '../../@types/serviceTypes';
import { DEFAULT_MOCK_MOVIE } from '../../mocks/mock-movies';

type MovieSelectedContextData = {
  movieSelected: TMDBMovieData;
};

type SetMovieSelectedContextData = {
  setMovieSelected: React.Dispatch<React.SetStateAction<TMDBMovieData>>;
};

export const MovieSelectedContext = React.createContext<MovieSelectedContextData>({
  movieSelected: DEFAULT_MOCK_MOVIE,
});

export const SetMovieSelectedContext = React.createContext<SetMovieSelectedContextData>({
  setMovieSelected: () => {},
});

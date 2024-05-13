import React from 'react';
import { TMDBMovieData } from '../../@types/serviceTypes';
import { DEFAULT_MOCK_MOVIE } from '../../mocks/mock-movies';

export const MovieSelectedContext = React.createContext<TMDBMovieData | null>(DEFAULT_MOCK_MOVIE);

export const SetMovieSelectedContext = React.createContext<
  React.Dispatch<React.SetStateAction<TMDBMovieData | null>>
>(() => {});

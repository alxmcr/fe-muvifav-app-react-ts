import React from 'react';

export const DialogMovieSelectedContext = React.createContext<boolean>(false);

export const SetDialogMovieSelectedContext = React.createContext<
  React.Dispatch<React.SetStateAction<boolean>>
>(() => {});

import React from 'react';

type DialogMovieSelectedContextData = {
  isOpen: boolean;
};

type SetDialogMovieSelectedContextData = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DialogMovieSelectedContext = React.createContext<DialogMovieSelectedContextData>({
  isOpen: false,
});

export const SetDialogMovieSelectedContext = React.createContext<SetDialogMovieSelectedContextData>({
  setIsOpen: () => {},
});

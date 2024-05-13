import React from 'react';
import { DialogMovieSelectedContext, SetDialogMovieSelectedContext } from './DialogMovieSelectedContext';

type Props = {
  children: React.ReactNode;
};

export default function DialogMovieSelectedProvider({ children }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DialogMovieSelectedContext.Provider value={{ isOpen }}>
      <SetDialogMovieSelectedContext.Provider value={{ setIsOpen }}>
        {children}
      </SetDialogMovieSelectedContext.Provider>
    </DialogMovieSelectedContext.Provider>
  );
}

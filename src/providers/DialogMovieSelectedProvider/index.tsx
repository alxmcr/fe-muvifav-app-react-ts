import React from 'react';
import { DialogMovieActionsContext, DialogRefMovieSelectedContext } from './DialogMovieSelectedContext';

type Props = {
  children: React.ReactNode;
};

export default function DialogMovieSelectedProvider({ children }: Props) {
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <DialogRefMovieSelectedContext.Provider value={dialogRef}>
      <DialogMovieActionsContext.Provider value={{ openDialog, closeDialog }}>
        {children}
      </DialogMovieActionsContext.Provider>
    </DialogRefMovieSelectedContext.Provider>
  );
}

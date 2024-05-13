import React from 'react';
import { DialogMovieActions } from '../../@types/providerTypes';

const initialActions: DialogMovieActions = {
  openDialog: () => {},
  closeDialog: () => {},
};

export const DialogRefMovieSelectedContext = React.createContext<React.RefObject<HTMLDialogElement> | null>(
  null,
);

export const DialogMovieActionsContext = React.createContext<DialogMovieActions>(initialActions);

import React from 'react';
import {
  DialogMovieActionsContext,
  DialogRefMovieSelectedContext,
} from '../../providers/DialogMovieSelectedProvider/DialogMovieSelectedContext';
import CardMovieDetails from '../@movie/CardMovieDetails';
import { MovieSelectedContext } from '../../providers/MovieSelectedProvider/MovieSelectedContext';

export default function DialogMovieDetails() {
  const movieSelected = React.useContext(MovieSelectedContext);
  const dialogRef = React.useContext(DialogRefMovieSelectedContext);
  const { closeDialog } = React.useContext(DialogMovieActionsContext);

  if (movieSelected === null || movieSelected === undefined) {
    return null;
  }

  return (
    <dialog
      ref={dialogRef}
      className="h-[544px] w-[304px] bg-light-50 backdrop:bg-black/50 md:right-[-380px] md:top-[53px] md:h-[638px] md:w-[336px] lg:right-[-600px] lg:top-[5px] lg:h-[762px] lg:w-[392px] xl:right-[-610px] xl:top-[-16px] xl:w-[392px]"
    >
      <CardMovieDetails movie={movieSelected} closeDialog={closeDialog} />
    </dialog>
  );
}

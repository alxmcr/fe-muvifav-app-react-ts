import React from 'react';
import {
  DialogMovieActionsContext,
  DialogRefMovieSelectedContext,
} from '../../providers/DialogMovieSelectedProvider/DialogMovieSelectedContext';
import CardMovieDetails from '../@movie/CardMovieDetails';
import { MovieSelectedContext } from '../../providers/MovieSelectedProvider/MovieSelectedContext';
import Icon22x22CircleClose from '../@icons/22x22/Icon22x22CircleClose';

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
      className="w-[300px] rounded-lg p-4 backdrop:bg-black/50 md:w-[350px] lg:w-[500px]"
    >
      <div className="relative rounded-lg bg-light-50">
        <button className="absolute -right-1 -top-2 z-10 text-light-950" onClick={closeDialog}>
          <Icon22x22CircleClose />
        </button>
        <CardMovieDetails movie={movieSelected} />
      </div>
    </dialog>
  );
}

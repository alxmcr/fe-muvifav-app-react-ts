export type TMDBMovieData = {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
  adult?: boolean;
  genre_ids?: number[];
  original_title?: string;
  original_language?: string;
  backdrop_path?: string | null;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
};

export interface ITMDBFindAllMoviesResponse {
  total_results: number;
  total_pages: number;
  results: TMDBMovieData[];
}

export interface ITMDBFindAllUpcomingMoviesResponse {
  dates: {
    maximum: string;
    minimum: string;
  };
  total_results: number;
  total_pages: number;
  results: TMDBMovieData[];
}

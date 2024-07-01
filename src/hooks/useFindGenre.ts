import useGenres from "./useGenres";

const useFindGenre = (genreId?: number) =>
  useGenres().data?.results.find((genre) => genre.id === genreId);

export default useFindGenre;

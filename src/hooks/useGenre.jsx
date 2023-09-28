import genres from "../data/genres";

const useGenre = () => ({
  data: genres,
  error: null,
  isLoading: false
});

export default useGenre;

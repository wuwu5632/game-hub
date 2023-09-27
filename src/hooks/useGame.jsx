import useData from "./useData";

const useGame = (gameQuery) =>
  useData(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search:gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGame;

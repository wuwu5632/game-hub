import useData from "./useData";

const useGame = (gameQuery) =>
  useData(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGame;

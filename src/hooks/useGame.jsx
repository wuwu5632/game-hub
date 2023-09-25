import useData from "./useData";


const useGame = (selectedGenre) => useData("/games",{params:{genres:selectedGenre?.id}},[selectedGenre?.id])

export default useGame;

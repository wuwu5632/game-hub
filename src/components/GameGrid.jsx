import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, erro, isLoading } = useGame();
  const Skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      {erro && <Text>{erro}</Text>}
      <SimpleGrid
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing="15px"
      >
        {isLoading &&
          Skeletons.map((Skeleton) => <GameCardSkeleton key={Skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;

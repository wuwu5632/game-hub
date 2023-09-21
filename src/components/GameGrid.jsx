import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, erro } = useGame();

  return (
    <div>
      {erro && <Text>{erro}</Text>}
      <SimpleGrid padding="10px" columns={{sm:1 ,md:2,lg:3,xl:5}} spacing="15px">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;

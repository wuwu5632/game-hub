import { useEffect, useState } from "react";

import { Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";

const GameGrid = () => {
  const { games, erro } = useGame();

  return (
    <div>
      {erro && <Text>{erro}</Text>}
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </div>
  );
};

export default GameGrid;

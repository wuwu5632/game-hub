import { Badge } from "@chakra-ui/react";
import PropTypes from "prop-types";

const CriticScore = ({ game }) => {
  const score = game.metacritic;
  let color =  score >95? "yellow":score>80? "green" :""
  return (
    <div>
      <Badge colorScheme={color} fontSize="14px" borderRadius="4px" marginRight={2}>{score}</Badge>
    </div>
  );
};

CriticScore.propTypes = {
  game: PropTypes.shape({
    metacritic: PropTypes.number,
  }),
};

export default CriticScore;

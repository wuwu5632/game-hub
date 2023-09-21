import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

const GameCard = ({ game }) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <CardBody>
        <Image src={game.background_image} />
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
        <PlatformIconList game={game} />
        <CriticScore game={game}/>
        
        </HStack>
      </CardBody>
    </Card>
  );
};

GameCard.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired,
    metacritic:PropTypes.number.isRequired,
  }),
};

export default GameCard;

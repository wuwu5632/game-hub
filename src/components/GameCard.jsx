import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../hooks/image-url";

const GameCard = ({ game }) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList game={game} />
          <CriticScore game={game} />
        </HStack>
      </CardBody>
    </Card>
  );
};

GameCard.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired,
    metacritic: PropTypes.number.isRequired,
  }),
};

export default GameCard;

import { Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

const GameHeading = ({ selectedPlatform, selectedGenre }) => {
  console.log({selectedPlatform})
  return (
    <div>
      <Heading as="h1" marginBottom={3}>
      {selectedPlatform?.name} {selectedGenre?.name} Games
      </Heading>
    </div>
  );
};

GameHeading.propTypes = {
  selectedPlatform: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  selectedGenre: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default GameHeading;

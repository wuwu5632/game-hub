import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

const GameCardContainer = ({ children }) => {
  return (
    <Box borderRadius={10} overflow="hidden"  >
      {children}
    </Box>
  );
};
GameCardContainer.propTypes = {
    children: PropTypes.node.isRequired, // Use PropTypes.node to validate children
  };

export default GameCardContainer;

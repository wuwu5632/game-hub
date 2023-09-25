import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../hooks/image-url";
import PropTypes from "prop-types";

const GenreList = ({ selectedGenre, onSelectedGenre }) => {
  const { data, isLoading, erro } = useGenre();

  if (erro) return null;
  return (
    <div>
      {isLoading && <Spinner />}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectedGenre(genre)}
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "nomal"}
                fontSize="lg"
                variant="link"
              >
                {" "}
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

GenreList.propTypes = {
  selectedGenre: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  onSelectedGenre: PropTypes.func.isRequired,
};

export default GenreList;

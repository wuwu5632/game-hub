import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ getInputValue }) => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        onChange={(e) => getInputValue(e.target.value)}
        borderRadius={20}
        placeholder="Search games..."
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchBar;

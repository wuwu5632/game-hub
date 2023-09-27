import { HStack, Image } from "@chakra-ui/react";
import LOGO from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorMode/ColorModeSwitch";
import SearchBar from "./searchBar";

function Navbar() {
  return (
    <HStack  padding="10px">
      <Image src={LOGO} alt="Logo" boxSize="60px" />
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;

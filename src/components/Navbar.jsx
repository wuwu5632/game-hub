import { HStack, Image } from "@chakra-ui/react";
import LOGO from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorMode/ColorModeSwitch";
import SearchBar from "./SearchBar";

function Navbar({getInputValue}) {
  return (
    <HStack  padding="10px">
      <Image src={LOGO} alt="Logo" boxSize="60px" />
      <SearchBar getInputValue={getInputValue}/>
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;

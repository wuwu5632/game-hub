import { HStack, Image } from "@chakra-ui/react";
import LOGO from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorMode/ColorModeSwitch";

function Navbar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={LOGO} alt="Logo" boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;

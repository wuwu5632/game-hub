import { HStack, Image, Text } from "@chakra-ui/react";
import LOGO from "../assets/Logo/logo.webp";

function Navbar() {
  return (
    <HStack>
      <Image src={LOGO} alt="Logo" boxSize="60px" />
      <Text>Text</Text>
    </HStack>
  );
}

export default Navbar;

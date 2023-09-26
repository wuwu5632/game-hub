import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";

const PlatformSelector = ({ onSelectedPlatform,selectedPlatform }) => {
  const { data, erro } = usePlatform();
  console.log(selectedPlatform)
 

  if (erro) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform? selectedPlatform.name :"platform"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem

            onClick={() => onSelectedPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;

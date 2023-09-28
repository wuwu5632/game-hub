import { Image } from "@chakra-ui/react";
import bulleEyes from "../assets/Emojis/bulls-eye.webp";
import meh from "../assets/Emojis/meh.webp";
import thumbsUp from "../assets/Emojis/thumbs-up.webp";

const Emoji = ({rating}) => {
  const emojiMap = {
    3: { src: meh, alt: "meh",boxSize:"25px" },
    4: { src: thumbsUp, alt: "thumbs up",boxSize:"25px" },
    5: { src: bulleEyes, alt: "bull eyes",boxSize:"35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1}/>;
};

export default Emoji;

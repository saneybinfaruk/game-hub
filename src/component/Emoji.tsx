import React from "react";
import thumpsUp from "../assets/001-like.png";
import bullsEye from "../assets/002-focus.png";
import meh from "../assets/003-stop-sign.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumpsUp, alt: "recommended", boxSize: "27px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "29px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;

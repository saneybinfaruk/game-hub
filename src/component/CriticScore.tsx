import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge paddingX={2} fontSize={"14px"} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;

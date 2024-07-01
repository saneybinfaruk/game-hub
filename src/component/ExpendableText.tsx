import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
}
const ExpendableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const characterLimit = 300;

  if (!children) return null;
  if (children.length <= characterLimit) {
    return <Text>{children}</Text>;
  }

  const summary = expanded
    ? children
    : children.substring(0, characterLimit) + " ... ";

  return (
    <Text>
      {summary}{" "}
      <Button
        marginLeft={1}
        size={"sm"}
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};

export default ExpendableText;

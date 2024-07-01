import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const CardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={"10px"}
      _hover={{ transform: "scale(1.03)" , transition: 'transform 0.2s ease-in'}}
    
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default CardContainer;

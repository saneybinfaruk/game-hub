import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import BrandLogo from "../assets/brandIcon.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useGameQueryStore from "../store";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to={"/"}>
        <Image src={BrandLogo} boxSize="65px" />
      </Link>

      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

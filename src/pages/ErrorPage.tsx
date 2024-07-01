import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../component/NavBar";

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={10}>
        <Heading>Ops!!</Heading>

        <Text>
          {isRouteErrorResponse(error)
            ? "This page doesnot exist!! "
            : "Something unexpacted happends!"}
        </Text>
      </Box>
    </>
  );
}

export default ErrorPage;

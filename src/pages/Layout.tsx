import { Box } from "@chakra-ui/react";
import NavBar from "../component/NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavBar />
      <Box padding={8}>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;

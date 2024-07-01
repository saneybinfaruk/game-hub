import { Box, Grid, Show, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "../component/GameGrid";
import GameHeading from "../component/GameHeading";
import GenreList from "../component/GenreList";
import PlatformSelector from "../component/PlatformSelector";
import SortSelector from "../component/SortSelector";

function HomePage() {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingX={2}>
          <GameHeading />
          <HStack marginTop={2}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default HomePage;

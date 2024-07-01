import { Heading } from "@chakra-ui/react";
import useFindPlatform from "../hooks/useFindPlalform";
import useFindGenre from "../hooks/useFindGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useFindGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = useFindPlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;

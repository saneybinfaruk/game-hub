import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpendableText from "../component/ExpendableText";
import DefinationItem from "../component/DefinationItem";
import CriticScore from "../component/CriticScore";
import GameAttributes from "../component/GameAttributes";
import GameTrailer from "../component/GameTrailer";
import GameScreenShots from "../component/GameScreenShots";

function GameDetailsPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpendableText>{game.description_raw}</ExpendableText>
        <GameAttributes game={game} />
      </GridItem>

      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenShots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
}

export default GameDetailsPage;
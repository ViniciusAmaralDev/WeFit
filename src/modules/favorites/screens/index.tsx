import React from "react";
import { Container } from "./styles";
import { useRepository } from "@modules/repositories/hook";
import { RepositoryList } from "@shared/components/repositoriesList";

const Favorites = () => {
  const { favorites } = useRepository();

  return (
    <Container>
      <RepositoryList repositories={favorites} />
    </Container>
  );
};

export default Favorites;

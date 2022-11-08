import React from "react";
import { Container } from "./styles";
import { useRepository } from "@modules/repositories/hook";
import { RepositoryList } from "@shared/components/repositoriesList";

const Favorites = () => {
  const { repositories } = useRepository();

  return (
    <Container>
      <RepositoryList
        repositories={repositories.filter((repository) => repository.favorite)}
      />
    </Container>
  );
};

export default Favorites;

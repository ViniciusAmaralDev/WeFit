import React from "react";
import { useRepository } from "../hook";
import { Repository } from "../hook/types";
import { StatusBar } from "expo-status-bar";
import { Container, FlatList } from "./styles";
import { Card } from "../../../shared/components/card";

const Repositories = () => {
  const { repositories } = useRepository();

  return (
    <Container>
      <StatusBar style="dark" />
      <FlatList
        data={repositories}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Card repository={item as Repository} showFavoriteButton={true} />
        )}
      />
    </Container>
  );
};

export default Repositories;

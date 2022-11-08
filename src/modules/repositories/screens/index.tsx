import React from "react";
import { useRepository } from "../hook";
import { StatusBar } from "expo-status-bar";
import { Header } from "../components/header";
import { Container, FlatList } from "./styles";
import { Card } from "../components/card";
import { Repository } from "../hook/types";

const Repositories = () => {
  const { repositories, toggleModalOfSelectRepository } = useRepository();

  return (
    <Container>
      <StatusBar style="dark" />
      <Header title="WeFit" onPress={toggleModalOfSelectRepository} />
      <FlatList
        data={repositories}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Card repository={item as Repository} />}
      />
    </Container>
  );
};

export default Repositories;

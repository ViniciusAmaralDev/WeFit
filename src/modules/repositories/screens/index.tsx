import React from "react";
import { Container } from "./styles";
import { useRepository } from "../hook";
import { StatusBar } from "expo-status-bar";
import { Header } from "../components/header";

const Repositories = () => {
  const { toggleModalOfSelectRepository } = useRepository();

  return (
    <Container>
      <StatusBar style="dark" />
      <Header title="WeFit" onPress={toggleModalOfSelectRepository} />
    </Container>
  );
};

export default Repositories;

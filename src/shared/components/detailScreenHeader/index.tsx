import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Button, Text, ArrowIcon } from "./styles";

export const DetailScreenHeader = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Button onPress={() => navigation.goBack()}>
        <ArrowIcon />
      </Button>

      <Text>Detalhes</Text>
    </Container>
  );
};

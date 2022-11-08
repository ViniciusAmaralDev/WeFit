import React, { useEffect } from "react";
import { Container, Logo } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("BottomRouter");
    }, 2000);
  }, []);

  return (
    <Container>
      <Logo />
    </Container>
  );
};

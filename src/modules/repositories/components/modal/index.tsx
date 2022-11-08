import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useTheme } from "styled-components";
import { ActivityIndicator } from "react-native";
import { useModalize } from "react-native-modalize";
import { useRepository } from "@modules/repositories/hook";
import {
  Container,
  Content,
  Text,
  InputContainer,
  Input,
  ButtonsContainer,
  Button,
  TextButton,
} from "./styles";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export const Modal = ({ visible, onClose }: Props) => {
  const theme = useTheme();
  const { ref, open, close } = useModalize();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const { getAllRepositories, toggleModalOfSelectRepository } = useRepository();

  const getNewRepository = async () => {
    if (loading) return;

    setLoading(true);
    try {
      await getAllRepositories(username);
      onClose();
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    visible ? open() : close();
  }, [visible]);

  return (
    <Container ref={ref} onClose={onClose}>
      <Content>
        <Text size={14}>Alterar usuário selecionado</Text>

        <InputContainer>
          <Text light size={12}>
            Nome do usuário
          </Text>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setUsername}
          />
        </InputContainer>

        <ButtonsContainer>
          <Button light onPress={toggleModalOfSelectRepository}>
            <TextButton light>CANCELAR</TextButton>
          </Button>

          <Button onPress={getNewRepository}>
            {loading ? (
              <ActivityIndicator
                size="small"
                color={theme.colors.secondary_background}
              />
            ) : (
              <TextButton>SALVAR</TextButton>
            )}
          </Button>
        </ButtonsContainer>
      </Content>
    </Container>
  );
};

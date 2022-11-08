import { useTheme } from "styled-components";
import React, { useState, useEffect } from "react";
import { useModalize } from "react-native-modalize";
import { ActivityIndicator, Alert } from "react-native";
import { useRepository } from "@modules/repositories/hook";
import { useNetInfo } from "@react-native-community/netinfo";
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
  const { isConnected } = useNetInfo();
  const { ref, open, close } = useModalize();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const { getAllRepositoriesOnline, toggleModalOfSelectRepository } =
    useRepository();

  const getNewRepository = async () => {
    if (!isConnected) {
      Alert.alert("Aviso", "Você precisa estar conectado à internet");
      return;
    }

    if (loading) return;

    setLoading(true);
    try {
      await getAllRepositoriesOnline(username);
    } catch (error: any) {
    } finally {
      onClose();
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

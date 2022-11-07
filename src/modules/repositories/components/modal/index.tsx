import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useModalize } from "react-native-modalize";
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
  const { ref, open, close } = useModalize();
  const [username, setUsername] = useState("");

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
          <Input onChangeText={setUsername} />
        </InputContainer>

        <ButtonsContainer>
          <Button light onPress={() => {}}>
            <TextButton light>CANCELAR</TextButton>
          </Button>

          <Button onPress={() => {}}>
            <TextButton>SALVAR</TextButton>
          </Button>
        </ButtonsContainer>
      </Content>
    </Container>
  );
};

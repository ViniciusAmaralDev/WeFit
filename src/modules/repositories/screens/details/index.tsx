import React from "react";
import * as Linking from "expo-linking";
import { StatusBar } from "expo-status-bar";
import { useRepository } from "@modules/repositories/hook";
import { StackRootParamList } from "@core/router/Stack.router";
import { RouteProp, useRoute } from "@react-navigation/native";
import {
  Container,
  Content,
  VerticalContainer,
  HorizontalContainer,
  Label,
  RedBubble,
  Footer,
  FavoriteButton,
  FavorityText,
  FavoriteIcon,
  RepositoryButton,
  RepositoryText,
  LinkIcon,
} from "./styles";

type Props = RouteProp<StackRootParamList, "Details">;

export const Details = () => {
  const { id } = useRoute<Props>().params;
  const { repositories, handleFavoriteRepository } = useRepository();
  const repository = repositories.filter((repo) => repo.id === id)[0];

  const showRepository = async () => await Linking.openURL(repository.url);

  return (
    <Container>
      <StatusBar style="light" />
      <VerticalContainer>
        <Content>
          <Label>
            {repository.owner.name}/<Label bold>{repository.name}</Label>
          </Label>

          {repository.description && (
            <Label light marginTop={16}>
              {repository.description}
            </Label>
          )}

          <HorizontalContainer>
            <RedBubble />
            <Label>{repository.language}</Label>
          </HorizontalContainer>
        </Content>
      </VerticalContainer>

      <Footer>
        <RepositoryButton onPress={showRepository}>
          <RepositoryText>VER REPOSITÓRIO</RepositoryText>
          <LinkIcon />
        </RepositoryButton>

        <FavoriteButton
          favorite={repository.favorite}
          onPress={() => handleFavoriteRepository(repository.id)}
        >
          <FavorityText>
            {repository.favorite ? "DESFAVORITAR" : "FAVORITAR"}
          </FavorityText>
          <FavoriteIcon />
        </FavoriteButton>
      </Footer>
    </Container>
  );
};

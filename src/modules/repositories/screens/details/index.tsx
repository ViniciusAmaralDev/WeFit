import React from "react";
import * as Linking from "expo-linking";
import { StatusBar } from "expo-status-bar";
import { useRepository } from "@modules/repositories/hook";
import { StackRootParamList } from "@core/router/Stack.router";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
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
  const navigation = useNavigation();
  const { id, favorite } = useRoute<Props>().params;
  const { repositories, favorites, handleFavoriteRepository } = useRepository();
  const repository = favorite
    ? favorites.filter((item) => item.id === id)[0]
    : repositories.filter((item) => item.id === id)[0];

  const showRepository = async () => await Linking.openURL(repository.url);

  return (
    <Container>
      <StatusBar style="light" />
      {repository && Object.keys(repository).length > 0 && (
        <>
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

              {repository.language && (
                <HorizontalContainer>
                  <RedBubble />
                  <Label>{repository.language}</Label>
                </HorizontalContainer>
              )}
            </Content>
          </VerticalContainer>

          <Footer>
            <RepositoryButton onPress={showRepository}>
              <RepositoryText>VER REPOSITÓRIO</RepositoryText>
              <LinkIcon />
            </RepositoryButton>

            <FavoriteButton
              favorite={repository.favorite}
              onPress={() => {
                navigation.goBack();
                handleFavoriteRepository(repository);
              }}
            >
              <FavorityText>
                {repository.favorite ? "DESFAVORITAR" : "FAVORITAR"}
              </FavorityText>
              <FavoriteIcon />
            </FavoriteButton>
          </Footer>
        </>
      )}
    </Container>
  );
};

import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Repository } from "@modules/repositories/hook/types";
import {
  Container,
  HorizontalContainer,
  Text,
  Image,
  Line,
  Button,
  TextButton,
  StarIcon,
  RedBubble,
} from "./styles";
import { useRepository } from "@modules/repositories/hook";

type Props = { repository: Repository; showFavoriteButton?: boolean };

export const Card = ({ repository, showFavoriteButton }: Props) => {
  const navigation = useNavigation();
  const { handleFavoriteRepository } = useRepository();

  return (
    <Container
      onPress={() =>
        navigation.navigate("Details", {
          id: repository.id,
          favorite: repository.favorite,
        })
      }
    >
      <HorizontalContainer justify="space-between">
        <HorizontalContainer>
          <Text>{repository.owner.name}/</Text>
          <Text bold>{repository.name}</Text>
        </HorizontalContainer>

        <Image source={{ uri: repository.owner.avatar }} />
      </HorizontalContainer>

      <Line />

      {repository?.description && (
        <Text light size={12}>
          {repository.description}
        </Text>
      )}

      <HorizontalContainer
        justify="space-between"
        marginTop={repository?.description ? 16 : 0}
      >
        {showFavoriteButton && (
          <Button
            showColor
            justify="space-between"
            onPress={() => handleFavoriteRepository(repository)}
          >
            <StarIcon />

            <TextButton bold light>
              Favoritar
            </TextButton>
          </Button>
        )}

        <Button justify="space-evenly">
          <StarIcon />
          <Text>{repository.stars}</Text>
        </Button>

        {repository?.language && (
          <Button justify="space-evenly">
            <RedBubble />
            <Text>{repository.language}</Text>
          </Button>
        )}
      </HorizontalContainer>
    </Container>
  );
};

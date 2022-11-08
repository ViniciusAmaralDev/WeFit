import { AntDesign, Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

type Props = {
  bold?: boolean;
  light?: boolean;
  marginTop?: number;
  favorite?: boolean;
};

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary_background};
`;

export const Content = styled.View`
  width: 100%;
  padding: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.secondary_background};
`;

export const VerticalContainer = styled.View``;

export const HorizontalContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(16)}px;
`;

export const Label = styled.Text<Props>`
  font-family: ${({ theme, bold }) =>
    bold ? theme.fonts.bold : theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, light }) =>
    light ? theme.colors.primary_text : theme.colors.terciary_background};
  margin-top: ${({ marginTop }) => RFValue(marginTop || 0)}px;
`;

export const RedBubble = styled.View`
  width: ${RFValue(10)}px;
  height: ${RFValue(10)}px;
  border-radius: ${RFValue(5)}px;
  margin-right: ${RFValue(8)}px;
  background-color: ${({ theme }) => theme.colors.terciary_button};
`;

export const Footer = styled.View`
  width: 100%;
  padding: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.secondary_background};
`;

export const FavoriteButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})<Props>`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(12)}px;
  border-radius: ${RFValue(4)}px;
  background-color: ${({ theme, favorite }) =>
    !favorite ? theme.colors.secondary_button : "#0000"};

  border-width: ${RFValue(1)}px;
  border-color: ${({ theme, favorite }) =>
    !favorite ? "#0000" : theme.colors.terciary_background};
`;

export const FavorityText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.terciary_background};
`;

export const RepositoryButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 100%;
  flex-direction: row;
  padding: ${RFValue(12)}px;
  justify-content: center;
  align-items: center;
`;

export const RepositoryText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary_button};
`;

export const LinkIcon = styled(Feather).attrs(({ theme }) => ({
  name: "link-2",
  size: RFValue(20),
  color: theme.colors.primary_button,
}))`
  margin-left: ${RFValue(8)}px;
`;

export const FavoriteIcon = styled(AntDesign).attrs(({ theme, favorite }) => ({
  name: favorite ? "staro" : "star",
  size: RFValue(20),
  color: theme.colors.terciary_background,
}))`
  margin-left: ${RFValue(8)}px;
`;

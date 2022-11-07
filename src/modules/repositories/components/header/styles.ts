import { MaterialIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(50)}px ${RFValue(16)}px ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.secondary_background};
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.terciary_background};
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})``;

export const SettingsIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  name: "settings",
  size: RFValue(20),
  color: theme.colors.terciary_background,
}))``;

import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: ${RFValue(40)}px ${RFValue(16)}px ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.terciary_background};
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.secondary_background};
`;

export const Button = styled.TouchableOpacity.attrs({
    activeOpacity: 1,
  })``;
  
export const ArrowIcon = styled(AntDesign).attrs(({ theme }) => ({
    name: "arrowleft",
    size: RFValue(20),
    color: theme.colors.secondary_background,
  }))`
    margin-right: ${RFValue(8)}px;
  `;
  
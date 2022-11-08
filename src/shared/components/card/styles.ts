import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  justify?: string;
  bold?: boolean;
  size?: number;
  light?: boolean;
  showColor?: boolean;
  marginTop?: number;
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 100%;
  padding: ${RFValue(16)}px;
  border-radius: ${RFValue(8)}px;
  margin: ${RFValue(8)}px ${RFValue(0)}px;
  background-color: ${({ theme }) => theme.colors.secondary_background};
`;

export const HorizontalContainer = styled.View.attrs({
  style: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
})<Props>`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: center;
  margin-top: ${({ marginTop }) => RFValue(marginTop || 0)}px;
`;

export const Text = styled.Text<Props>`
  font-family: ${({ theme, bold }) =>
    bold ? theme.fonts.bold : theme.fonts.regular};
  font-size: ${({ size }) => RFValue(size || 14)}px;
  color: ${({ theme, light }) =>
    light ? theme.colors.primary_text : theme.colors.terciary_background};
`;

export const Image = styled.Image`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
  border-radius: ${RFValue(15)}px;
`;

export const Line = styled.View`
  width: 100%;
  margin: ${RFValue(16)}px ${RFValue(0)}px;
  border-bottom-width: ${RFValue(1)}px;
  border-bottom-color: ${({ theme }) => theme.colors.secondary_text};
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})<Props>`
  flex-direction: row;
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: center;
  padding: ${RFValue(12)}px;
  border-radius: ${RFValue(8)}px;
  background-color: ${({ theme, showColor }) =>
    showColor ? `${theme.colors.secondary_button}35` : "#0000"};
`;

export const TextButton = styled.Text<Props>`
  font-family: ${({ theme, bold }) =>
    bold ? theme.fonts.bold : theme.fonts.regular};
  font-size: ${({ size }) => RFValue(size || 14)}px;
  color: ${({ theme, light }) =>
    light ? theme.colors.secondary_button : theme.colors.terciary_background};
`;

export const RedBubble = styled.View`
  width: ${RFValue(10)}px;
  height: ${RFValue(10)}px;
  border-radius: ${RFValue(5)}px;
  margin-right: ${RFValue(8)}px;
  background-color: ${({ theme }) => theme.colors.terciary_button};
`;

export const StarIcon = styled(AntDesign).attrs(({ theme, light }) => ({
  name: "star",
  size: RFValue(20),
  color: theme.colors.secondary_button,
}))`
  margin-right: ${RFValue(8)}px;
`;

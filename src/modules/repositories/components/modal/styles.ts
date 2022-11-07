import styled from "styled-components/native";
import { Modalize } from "react-native-modalize";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  size?: number;
  light?: boolean;
};

export const Container = styled(Modalize).attrs({
  adjustToContentHeight: true,
  handlePosition: "inside",
  childrenStyle: {
    padding: RFValue(24),
  },
})`
  background-color: ${({ theme }) => theme.colors.secondary_background};
`;

export const Content = styled.View`
  width: 100%;
  padding-top: ${RFValue(8)}px;
`;

export const Text = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ size }) => RFValue(size)}px;
  color: ${({ theme, light }) =>
    light ? theme.colors.primary_text : theme.colors.terciary_background};
`;

export const InputContainer = styled.View`
  width: 100%;
  padding: ${RFValue(8)}px ${RFValue(16)}px;
  border-radius: ${RFValue(4)}px;
  margin: ${RFValue(8)}px ${RFValue(0)}px;
  background-color: ${({ theme }) => theme.colors.primary_background};
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.terciary_background,
}))`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.terciary_background};
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})<Props>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(12)}px;
  border-radius: ${RFValue(4)}px;
  background-color: ${({ theme, light }) =>
    light ? "#0000" : theme.colors.primary_button};
`;

export const TextButton = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, light }) =>
    light ? theme.colors.primary_button : theme.colors.secondary_background};
`;

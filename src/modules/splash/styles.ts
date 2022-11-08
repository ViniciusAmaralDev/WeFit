import logo from "@assets/images/logo.png";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary_background};
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: ${RFValue(400)}px;
  height: ${RFValue(400)}px;
`;

import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const FlatList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: RFValue(8),
  },
})``;

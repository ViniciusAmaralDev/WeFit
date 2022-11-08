import React from "react";
import { Card } from "../card";
import { FlatList } from "./styles";
import { Repository } from "@modules/repositories/hook/types";

type Props = {
  repositories: Repository[];
};

export const RepositoryList = ({ repositories }: Props) => {
  return (
    <FlatList
      data={repositories}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => <Card repository={item as Repository} />}
    />
  );
};

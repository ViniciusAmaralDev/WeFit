import React from "react";
import { Children } from "./globalTypes";
import { RepositoryProvider } from "@modules/repositories/hook";

export default function HookProvider({ children }: Children) {
  return <RepositoryProvider>{children}</RepositoryProvider>;
}

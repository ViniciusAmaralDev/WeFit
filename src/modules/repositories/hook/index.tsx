import { useState } from "react";
import { useContext } from "react";
import { Modal } from "../components/modal";
import React, { createContext } from "react";
import { Children } from "@core/hooks/globalTypes";
import { Repository, RepositoryContext } from "./types";

const Context = createContext<RepositoryContext>({} as RepositoryContext);

export const RepositoryProvider = ({ children }: Children) => {
  const [showModal, setShowModal] = useState(false);
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const toggleModalOfSelectRepository = () => setShowModal((value) => !value);

  return (
    <Context.Provider value={{ repositories, toggleModalOfSelectRepository }}>
      {children}
      <Modal visible={showModal} onClose={() => setShowModal(false)} />
    </Context.Provider>
  );
};

export const useRepository = () => useContext(Context);

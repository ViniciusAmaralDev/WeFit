import { useState } from "react";
import { useContext } from "react";
import { Modal } from "../components/modal";
import React, { createContext } from "react";
import { Children } from "@core/hooks/globalTypes";
import { Repository, RepositoryContext } from "./types";
import { repositoryService } from "../service/Repo.service";
import { useEffect } from "react";
import axios from "axios";

const Context = createContext<RepositoryContext>({} as RepositoryContext);

export const RepositoryProvider = ({ children }: Children) => {
  const [showModal, setShowModal] = useState(false);
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const toggleModalOfSelectRepository = () => setShowModal((value) => !value);

  const getAllRepositories = async (user: string) => {
    try {
      const { data } = await repositoryService.http.getAll(user);
      return data.map((repo) => ({
        id: repo.id,
        name: repo.name,
        owner: { name: repo.owner.login, avatar: repo.owner.avatar_url },
        description: repo.description,
        url: repo.url,
      }));
    } catch (error: any) {
      console.log("ERROR: GET ALL REPOSITORIES =>", error);
    }
  };

  useEffect(() => {
    (async () => {
      const repos = await getAllRepositories("appswefit");
      setRepositories(repos);
    })();
  }, []);

  return (
    <Context.Provider value={{ repositories, toggleModalOfSelectRepository }}>
      {children}
      <Modal visible={showModal} onClose={() => setShowModal(false)} />
    </Context.Provider>
  );
};

export const useRepository = () => useContext(Context);

import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Modal } from "../components/modal";
import React, { createContext } from "react";
import { Children } from "@core/hooks/globalTypes";
import { Repository, RepositoryContext } from "./types";
import { repositoryService } from "../service/Repo.service";

const Context = createContext<RepositoryContext>({} as RepositoryContext);

export const RepositoryProvider = ({ children }: Children) => {
  const [showModal, setShowModal] = useState(false);
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const toggleModalOfSelectRepository = () => setShowModal((value) => !value);

  const handleFavoriteRepository = (id: number) => {
    setRepositories((repositories) =>
      repositories.map((repository) => ({
        ...repository,
        favorite: repository.id === id ? true : false,
      }))
    );
  };

  const getAllRepositories = async (user: string) => {
    try {
      const { data } = await repositoryService.http.getAll(user);
      setRepositories(
        data.map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          owner: { name: repo.owner.login, avatar: repo.owner.avatar_url },
          description: repo.description,
          url: repo.svn_url,
          language: repo.language,
          stars: repo.forks_count,
          favorite: false,
        }))
      );
    } catch (error: any) {
      console.log("ERROR: GET ALL REPOSITORIES =>", error);
    }
  };

  useEffect(() => {
    (async () => await getAllRepositories("ViniciusAmaralDev"))();
  }, []);

  return (
    <Context.Provider
      value={{
        repositories,
        getAllRepositories,
        toggleModalOfSelectRepository,
        handleFavoriteRepository,
      }}
    >
      {children}
      <Modal visible={showModal} onClose={() => setShowModal(false)} />
    </Context.Provider>
  );
};

export const useRepository = () => useContext(Context);

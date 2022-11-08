import { useState } from "react";
import { Modal } from "../components/modal";
import { Children } from "@core/hooks/globalTypes";
import { Repository, RepositoryContext } from "./types";
import { repositoryService } from "../service/Repo.service";
import { useNetInfo } from "@react-native-community/netinfo";
import React, { createContext, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Context = createContext<RepositoryContext>({} as RepositoryContext);

export const RepositoryProvider = ({ children }: Children) => {
  const { isConnected } = useNetInfo();
  const [showModal, setShowModal] = useState(false);
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const toggleModalOfSelectRepository = () => setShowModal((value) => !value);

  const handleFavoriteRepository = async (id: number) => {
    const repos = repositories.map((repository) => ({
      ...repository,
      favorite:
        repository.id === id ? !repository.favorite : repository.favorite,
    }));
    setRepositories(repos);
    await AsyncStorage.setItem("repositories", JSON.stringify(repos));
  };

  const getAllRepositoriesOnline = async (user: string) => {
    try {
      const { data } = await repositoryService.http.getAll(user);
      const repositories = data.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        owner: { name: repo.owner.login, avatar: repo.owner.avatar_url },
        description: repo.description,
        url: repo.svn_url,
        language: repo.language,
        stars: repo.forks_count,
        favorite: false,
      }));

      await AsyncStorage.setItem("repositories", JSON.stringify(repositories));
      setRepositories(repositories);
    } catch (error: any) {
      console.log("ERROR: GET ALL REPOSITORIES ONLINE =>", error);
    }
  };

  const getAllRepositoriesOffline = async () => {
    try {
      const repositories = await AsyncStorage.getItem("repositories");
      console.log(JSON.parse(repositories));
      setRepositories(JSON.parse(repositories));
    } catch (error: any) {
      console.log("ERROR: GET ALL REPOSITORIES OFFLINE =>", error);
    }
  };

  useEffect(() => {
    if (!isConnected) getAllRepositoriesOnline("appswefit");
    else getAllRepositoriesOffline();
  }, [isConnected]);

  return (
    <Context.Provider
      value={{
        repositories,
        getAllRepositoriesOnline,
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

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
  const [favorites, setFavorites] = useState<Repository[]>([]);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [repositoryOwner, setRepositoryOwner] = useState("appswefit");

  const toggleModalOfSelectRepository = () => setShowModal((value) => !value);

  const handleFavoriteRepository = async (repository: Repository) => {
    if (repository.favorite) {
      const user = repositories[0].owner.name;
      if (user === repository.owner.name) {
        const data = favorites.filter((repos) => repos.id === repository.id)[0];

        data.favorite = false;
        const newRepositories = [...repositories, data];
        setRepositories(newRepositories);
        await AsyncStorage.setItem(
          "repositories",
          JSON.stringify(newRepositories)
        );
      }

      const newFavorites = favorites.filter(
        (repos) => repos.id !== repository.id
      );
      setFavorites(newFavorites);
      await AsyncStorage.setItem("favorites", JSON.stringify(newFavorites));
    } else {
      repository.favorite = true;
      const newFavorites = [...favorites, repository];
      setFavorites(newFavorites);
      await AsyncStorage.setItem("favorites", JSON.stringify(newFavorites));

      const repos = repositories.filter((repos) => repos.id !== repository.id);
      setRepositories(repos);
      await AsyncStorage.setItem("repositories", JSON.stringify(repos));
    }
  };

  const formatRepositories = (repositories: Repository[]) =>
    repositories.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      owner: { name: repo.owner.login, avatar: repo.owner.avatar_url },
      description: repo.description,
      url: repo.svn_url,
      language: repo.language,
      stars: repo.forks_count,
      favorite: false,
    }));

  const getAllRepositoriesOnline = async (user: string) => {
    try {
      const offline = await AsyncStorage.getItem("favorites");
      const favorites = JSON.parse(offline);

      const { data } = await repositoryService.http.getAll(user);

      const owner = data[0].owner.login;
      setRepositoryOwner(owner);
      await AsyncStorage.setItem("repositoryOwner", owner);

      if (favorites && favorites.length > 0) {
        const ids = favorites.map((item: any) => item.id);
        const filtered = data.filter((item: any) => !ids.includes(item.id));
        const repos = formatRepositories(filtered);
        setRepositories(repos);
        setFavorites(favorites);
        await AsyncStorage.setItem("repositories", JSON.stringify(repos));
      } else {
        const repositories = formatRepositories(data);
        setRepositories(repositories);
        setFavorites([]);
      }
    } catch (error: any) {
      console.log("ERROR: GET ALL REPOSITORIES ONLINE =>", error);
    }
  };

  const getAllRepositoriesOffline = async () => {
    try {
      const repositories = await AsyncStorage.getItem("repositories");
      setRepositories(JSON.parse(repositories));

      const favorites = await AsyncStorage.getItem("favorites");
      setFavorites(JSON.parse(favorites));
    } catch (error: any) {
      console.log("ERROR: GET ALL REPOSITORIES OFFLINE =>", error);
    }
  };

  useEffect(() => {
    // AsyncStorage.removeItem('favorites')
    (async () => {
      const owner = await AsyncStorage.getItem("repositoryOwner");
      if (isConnected) getAllRepositoriesOnline(owner ?? repositoryOwner);
      else getAllRepositoriesOffline();
    })();
  }, [isConnected]);

  return (
    <Context.Provider
      value={{
        repositories,
        favorites,
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

import IRepoOfflineRepository, {
  Key,
} from "../repository/RepoOfflineRepository";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Repository } from "@modules/repositories/hook/types";

const RepoOfflineService: IRepoOfflineRepository = {
  getRepository: async (key: Key) => {
    const repositories = await AsyncStorage.getItem(key);
    return JSON.parse(repositories);
  },
  addRepository: async (key: Key, repository: Repository[]) => {
    await AsyncStorage.setItem(key, JSON.stringify(repository));
  },
  addOwner: async (owner: string) => {
    await AsyncStorage.setItem("repositoryOwner", JSON.stringify(owner));
  },
  getOwner: async () => {
    const owner = await AsyncStorage.getItem("repositoryOwner");
    return JSON.parse(owner);
  },
};

export default RepoOfflineService;

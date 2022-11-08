import IRepoHttpRepository from "../gateway/http/repository/RepoHttpRepository";
import RepoHttpService from "../gateway/http/service/RepoHttpService";
import IRepoOfflineRepository from "../gateway/offline/repository/RepoOfflineRepository";
import RepoOfflineService from "../gateway/offline/service/RepoOfflineService";

interface IRepoService {
  http: IRepoHttpRepository;
  offline: IRepoOfflineRepository;
}

const repositoryService: IRepoService = {
  http: {
    get: RepoHttpService.get,
  },
  offline: {
    getRepository: RepoOfflineService.getRepository,
    addRepository: RepoOfflineService.addRepository,
    addOwner: RepoOfflineService.addOwner,
    getOwner: RepoOfflineService.getOwner,
  },
};

export { repositoryService };

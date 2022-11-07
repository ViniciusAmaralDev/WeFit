import IRepoHttpRepository from "../gateway/http/repository/RepoHttpRepository";
import RepoHttpService from "../gateway/http/service/RepoHttpService";

interface IRepoService {
  http: IRepoHttpRepository;
}

const repositoryService: IRepoService = {
  http: {
    getAll: RepoHttpService.getAll,
  },
};

export { repositoryService };

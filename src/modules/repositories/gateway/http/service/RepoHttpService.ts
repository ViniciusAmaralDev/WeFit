import { api } from "../../../../../service";
import IRepoHttpRepository from "../repository/RepoHttpRepository";

const RepoHttpService: IRepoHttpRepository = {
  get: (user: string) => api.get(`/${user}/repos`),
};

export default RepoHttpService;

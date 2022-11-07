import { AxiosPromise } from "axios";

export default interface IRepoHttpRepository {
  getAll: (user: string) => Promise<AxiosPromise>;
}

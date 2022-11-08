import { AxiosPromise } from "axios";

export default interface IRepoHttpRepository {
  get: (user: string) => Promise<AxiosPromise>;
}

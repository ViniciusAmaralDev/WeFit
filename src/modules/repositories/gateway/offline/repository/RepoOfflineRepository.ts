import { Repository } from "@modules/repositories/hook/types";

export type Key = "repositories" | "favorites";

export default interface IRepoOfflineRepository {
  getRepository: (key: Key) => Promise<Repository[]>;
  addRepository: (key: Key, repository: Repository[]) => Promise<void>;
  addOwner: (owner: string) => Promise<void>;
  getOwner: () => Promise<string>;
}

export type Repository = {
  id: string;
  name: string;
  owner: { name: string; avatar: string };
  description: string;
  url: string;
};

export type RepositoryContext = {
  repositories: Repository[];
  toggleModalOfSelectRepository: () => void;
};

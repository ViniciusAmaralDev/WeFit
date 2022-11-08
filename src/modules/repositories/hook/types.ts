export type Repository = {
  id: number;
  name: string;
  owner: { name: string; avatar: string };
  description: string;
  url: string;
  language: string;
  stars: number;
  favorite: boolean;
};

export type RepositoryContext = {
  repositories: Repository[];
  getAllRepositories: (user: string) => Promise<void>;
  toggleModalOfSelectRepository: () => void;
  handleFavoriteRepository: (id: number) => void;
};

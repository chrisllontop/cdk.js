import type {GithubProvider} from "../../providers/github";

export enum Providers {
  GITHUB = 'github',
  GITLAB = 'gitlab',
  BITBUCKET = 'bitbucket',
}

export type ProviderValues = `${Providers}`;

export type ProviderInstance = GithubProvider;
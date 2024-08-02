import {IntegrationProvider} from "../provider";

export class GithubProvider extends IntegrationProvider {
  constructor() {
    super();
    console.log('Github Provider')
  }
}
import {IntegrationProvider} from "../provider";
import type {GitHubActionsWorkflow} from "./types.ts";

export class GithubProvider extends IntegrationProvider {
  pipeline: GitHubActionsWorkflow = {}

  constructor() {
    super();
    console.log('Github Provider')
  }

  name(name: string){
    this.pipeline.name = name;
    return this;
  }
}
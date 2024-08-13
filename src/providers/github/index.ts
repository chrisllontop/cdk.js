import {IntegrationProvider} from "../provider";
import type {GitHubActionsEventTrigger, GitHubActionsWhitOptions, GitHubActionsWorkflow, OptionsEvents} from "./types.ts";

export class GithubProvider extends IntegrationProvider {
  pipeline: GitHubActionsWorkflow = {}

  constructor() {
    super();
  }

  name(name: string) {
    this.pipeline.name = name;
    return this;
  }

  on<T extends GitHubActionsEventTrigger>(actions: T, options: OptionsEvents<T> | null = null) {
    const actionsWhitOptions: GitHubActionsWhitOptions<T> =  options ? {[actions]: options}  as GitHubActionsWhitOptions<T> : actions;

    if(this.pipeline.on) {
      if(!Array.isArray(this.pipeline.on)) {
        this.pipeline.on = [this.pipeline.on, actionsWhitOptions];
        return this;
      } 
  
      if (Array.isArray(this.pipeline.on)) {
        this.pipeline.on.push(actionsWhitOptions);
        return this;
      }
    }

      this.pipeline.on = actionsWhitOptions; 
      return this;
  }
}
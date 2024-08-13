import type { GitHubActionsEventTrigger } from "../providers/github/types";
import type { ActionsEventTrigger } from "./providers/provider";

type UniquePullRequestOptions = {
  branches?: String | String[] 
  "branches-ignore"?: String | String[] 
  paths?: String | String[]
}

type TagsOptions = {
  tags?: String | String[]
  "tags-ignore"?: String | String[]
}

type ScheduleOptions = {
  cron?: String
}

type WorkFlowDispatchOptions = {
  inputs?: {
    logLevel?: LogLevel
    tags?: Tags
    environment?: Environment
  }
}

type LogLevel = {
  description?: String
  required?: Boolean
  default?: String
  // type: choice
  options?: String | string[]
}

type Tags = {
  description?: 'Test scenario tags'
  required?: Boolean
  // type?: boolean
}

type Environment = {
  description?: String
  // type?: environment
  required?: Boolean
}

type WorkflowRunOptions = {
  workflows?: String | String[]
  branches?: String | String[]
  "branches-ignore"?: String | String[] 
}

export type UniqueOptions<T extends GitHubActionsEventTrigger> = T extends ActionsEventTrigger.PULL_REQUEST
  | ActionsEventTrigger.PULL_REQUEST_TARGET 
  ? UniquePullRequestOptions 
  : T extends ActionsEventTrigger.PUSH
  ? UniquePullRequestOptions & TagsOptions
  : T extends ActionsEventTrigger.SCHEDULE
  ? ScheduleOptions | ScheduleOptions[]
  : T extends ActionsEventTrigger.WORKFLOW_DISPATCH
  ? WorkFlowDispatchOptions
  : T extends ActionsEventTrigger.WORKFLOW_RUN
  ? WorkflowRunOptions
  : never;
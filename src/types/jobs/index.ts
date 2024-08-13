import type { GitHubActionsEventTrigger } from "../../providers/github/types";
import type { ActionsEventTrigger } from "../providers/provider";

export type IssueCommentJobsUniqueOptionsExist<T extends GitHubActionsEventTrigger> = T extends ActionsEventTrigger.ISSUE_COMMENT
? IssueCommentJobsUniqueOptions
: never;

type IssueCommentJobsUniqueOptions =  {
  pr_commented?: GeneralOptionsJobs | GeneralOptionsJobs[]
  issue_commented?: GeneralOptionsJobs | GeneralOptionsJobs[]
}

export type PullRequestJobsUniqueOptionsExist<T extends GitHubActionsEventTrigger> = T extends ActionsEventTrigger.ISSUE_COMMENT
? PullRequestJobsUniqueOptions
: never;

type PullRequestJobsUniqueOptions = {
  specific_review_requested?: GeneralOptionsJobs | GeneralOptionsJobs[]
  if_merged?: GeneralOptionsJobs | GeneralOptionsJobs[]
}

export type PullRequestReviewJobsUniqueOptionsExist<T extends GitHubActionsEventTrigger> = T extends ActionsEventTrigger.ISSUE_COMMENT
? PullRequestReviewJobsUniqueOptions
: never;

type PullRequestTargetJobsUniqueOptions = {
  run_if?: GeneralOptionsJobs | GeneralOptionsJobs[]
  if_merged?: GeneralOptionsJobs | GeneralOptionsJobs[]
}

export type PullRequestTargetJobsUniqueOptionsExist<T extends GitHubActionsEventTrigger> = T extends ActionsEventTrigger.ISSUE_COMMENT
? PullRequestTargetJobsUniqueOptions
: never;

type PullRequestReviewJobsUniqueOptions = {
  approved?: GeneralOptionsJobs | GeneralOptionsJobs[]
}

export type StatusJobsUniqueOptionsExist<T extends GitHubActionsEventTrigger> = T extends ActionsEventTrigger.ISSUE_COMMENT
? StatusJobsUniqueOptions
: never;

type StatusJobsUniqueOptions = {
  if_error_or_failure?: GeneralOptionsJobs | GeneralOptionsJobs[]
}

export type WorkFlowsRunsJobsUniqueOptionsExist<T extends GitHubActionsEventTrigger> = T extends ActionsEventTrigger.ISSUE_COMMENT
? WorkFlowsRunJobsUniqueOptions
: never;

type WorkFlowsRunJobsUniqueOptions = {
  'on-success'?: GeneralOptionsJobs | GeneralOptionsJobs[]
  'on-failure'?: GeneralOptionsJobs | GeneralOptionsJobs[]
}

type GeneralOptionsJobs = {
  name?: string
  if?: string;
  'runs-on': string | string[];
  steps: GitHubActionsStep[];
}

export type GitHubActionsJob = { 
  name: string
  'runs-on': string | string[];
  steps: GitHubActionsStep[];
  needs?: string | string[];
  if?: string;
  env?: Record<string, string>;
  defaults?: GitHubActionsDefaults;
  strategy?: GitHubActionsStrategy;
  matrix?: Record<string, any>;
  concurrency?: string | GitHubActionsConcurrency;
  outputs?: Record<string, string>;
  services?: Record<string, GitHubActionsService>;
  'timeout-minutes'?: number;
  'continue-on-error'?: boolean | string;
  container?: GitHubActionsContainer;
};

export type GitHubActionsStep = {
  name?: string;
  id?: string;
  if?: string;
  uses?: string;
  run?: string;
  env?: Record<string, string>;
  with?: Record<string, any>;
  'working-directory'?: string;
  shell?: string;
  'continue-on-error'?: boolean | string;
  'timeout-minutes'?: number;
};

export type GitHubActionsDefaults = {
  run?: {
    shell?: string;
    'working-directory'?: string;
  };
};
  
export type GitHubActionsStrategy = {
  matrix?: Record<string, any>;
  'fail-fast'?: boolean;
  'max-parallel'?: number;
};

export type GitHubActionsConcurrency = {
  group: string;
  'cancel-in-progress': boolean;
};

export type GitHubActionsService = {
  image: string;
  options?: string;
  ports?: string[];
  volumes?: string[];
  env?: Record<string, string>;
};

export type GitHubActionsContainer = {
  image: string;
  credentials?: {
      username: string;
      password: string;
  };
  env?: Record<string, string>;
  ports?: string[];
  volumes?: string[];
  options?: string;
};
import type { EventTypes } from "../../types/eventTypes";
import type { GitHubActionsJob, IssueCommentJobsUniqueOptionsExist, PullRequestJobsUniqueOptionsExist, PullRequestReviewJobsUniqueOptionsExist, PullRequestTargetJobsUniqueOptionsExist, StatusJobsUniqueOptionsExist, WorkFlowsRunsJobsUniqueOptionsExist } from "../../types/jobs";
import { ActionsEventTrigger } from "../../types/providers/provider";
import type { UniqueOptions } from "../../types/uniqueEventOptions";

export type GitHubActionsWorkflow = {
  name?: string;
  on?: GitHubActionsWhitOptions<GitHubActionsEventTrigger> | GitHubActionsWhitOptions<GitHubActionsEventTrigger>[]
  jobs?: Record<string, GitHubActionsJob 
    & IssueCommentJobsUniqueOptionsExist<GitHubActionsEventTrigger>
    & PullRequestJobsUniqueOptionsExist<GitHubActionsEventTrigger>
    & PullRequestReviewJobsUniqueOptionsExist<GitHubActionsEventTrigger>
    & PullRequestTargetJobsUniqueOptionsExist<GitHubActionsEventTrigger>
    & StatusJobsUniqueOptionsExist<GitHubActionsEventTrigger>
    & WorkFlowsRunsJobsUniqueOptionsExist<GitHubActionsEventTrigger>
  >;
};

export type GitHubActionsEventTrigger = ActionsEventTrigger.BRANCH_PROTECTION_RULE
  | ActionsEventTrigger.CHECK_RUN
  | ActionsEventTrigger.CHECK_SUITE
  | ActionsEventTrigger.CREATE
  | ActionsEventTrigger.DELETE
  | ActionsEventTrigger.DEPLOYMENT
  | ActionsEventTrigger.DEPLOYMENT_STATUS
  | ActionsEventTrigger.DISCUSSION
  | ActionsEventTrigger.DISCUSSION_COMMENT
  | ActionsEventTrigger.FORK
  | ActionsEventTrigger.GOLLUM
  | ActionsEventTrigger.ISSUE_COMMENT
  | ActionsEventTrigger.ISSUES
  | ActionsEventTrigger.LABEL
  | ActionsEventTrigger.MILESTONE
  | ActionsEventTrigger.PAGE_BUILD
  | ActionsEventTrigger.PROJECT
  | ActionsEventTrigger.PROJECT_CARD
  | ActionsEventTrigger.PROJECT_COLUMN
  | ActionsEventTrigger.PUBLIC
  | ActionsEventTrigger.PULL_REQUEST
  | ActionsEventTrigger.PULL_REQUEST_REVIEW
  | ActionsEventTrigger.PULL_REQUEST_REVIEW_COMMENT
  | ActionsEventTrigger.PULL_REQUEST_TARGET
  | ActionsEventTrigger.PUSH
  | ActionsEventTrigger.REGISTRY_PACKAGE
  | ActionsEventTrigger.RELEASE
  | ActionsEventTrigger.REPOSITORY_DISPATCH
  | ActionsEventTrigger.SCHEDULE
  | ActionsEventTrigger.STATUS
  | ActionsEventTrigger.WATCH
  | ActionsEventTrigger.WORKFLOW_CALL
  | ActionsEventTrigger.WORKFLOW_DISPATCH
  | ActionsEventTrigger.WORKFLOW_RUN

type ExtendedGitHubActionsEventTrigger<T extends GitHubActionsEventTrigger> = 
  T extends ActionsEventTrigger.PULL_REQUEST ? 
  ActionsEventTrigger.MERGE_GROUP : 
  never;

export type CompleGitHubActionsEventTrigger<T extends GitHubActionsEventTrigger> = GitHubActionsEventTrigger & ExtendedGitHubActionsEventTrigger<T>

export type GitHubActionsWhitOptions<T extends GitHubActionsEventTrigger> = {
  [key in CompleGitHubActionsEventTrigger<T>]: OptionsEvents<T>;
} | CompleGitHubActionsEventTrigger<T>;

export type OptionsEvents<T extends GitHubActionsEventTrigger>  = {
  types?: EventTypes<T> & UniqueOptions<T>
}

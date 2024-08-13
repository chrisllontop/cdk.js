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

export type GitHubActionsEventTrigger = | ActionsEventTrigger.BRANCH_PROTECTION_RULE
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
  | ActionsEventTrigger.MERGE_GROUP
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

export type GitHubActionsWhitOptions<T extends GitHubActionsEventTrigger> = {
  [key in GitHubActionsEventTrigger]: OptionsEvents<T>;
} | GitHubActionsEventTrigger;

export type OptionsEvents<T extends GitHubActionsEventTrigger>  = {
  types?: EventTypes<T> & UniqueOptions<T>
}

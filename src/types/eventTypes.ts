import type { GitHubActionsEventTrigger } from "../providers/github/types";
import type { ActionsEventTrigger, TypesActions } from "./providers/provider";

type BasicTypes = TypesActions.CREATED 
  | TypesActions.EDITED 
  | TypesActions.DELETED;

type CheckRunTypes = TypesActions.CREATED 
  | TypesActions.REREQUESTED 
  | TypesActions.COMPLETED 
  | TypesActions.REQUESTED_ACTION;

type DiscussionTypes = BasicTypes
  | TypesActions.TRANSFERRED
  | TypesActions.PINNED
  | TypesActions.UNPINNED
  | TypesActions.LABALED
  | TypesActions.UNLABALED
  | TypesActions.LOCKED
  | TypesActions.UNLOCKED
  | TypesActions.CATEGORY_CHANGED
  | TypesActions.ANSWERED
  | TypesActions.UNANSWERED
  
type IssuesTypes = TypesActions.OPENED
    | TypesActions.EDITED
    | TypesActions.DELETED
    | TypesActions.TRANSFERRED
    | TypesActions.PINNED
    | TypesActions.UNPINNED
    | TypesActions.CLOSED
    | TypesActions.REOPENED
    | TypesActions.ASSIGNED
    | TypesActions.UNASSIGNED
    | TypesActions.LABALED
    | TypesActions.UNLABALED
    | TypesActions.LOCKED
    | TypesActions.UNLOCKED
    | TypesActions.MILESTONED
    | TypesActions.DEMILESTONED

type MilestoneTypes = BasicTypes 
  | TypesActions.CLOSED
  | TypesActions.OPENED

type ProjectTypes = BasicTypes
  | TypesActions.CLOSED
  | TypesActions.REOPENED

type ProjectColumnTypes = TypesActions.CREATED
  | TypesActions.UPDATED
  | TypesActions.MOVED
  | TypesActions.DELETED

type PullRequestTypes = TypesActions.ASSIGNED
  | TypesActions.UNASSIGNED
  | TypesActions.LABALED
  | TypesActions.UNLABALED
  | TypesActions.OPENED
  | TypesActions.EDITED
  | TypesActions.CLOSED
  | TypesActions.REOPENED
  | TypesActions.SYNCHRONIZE
  | TypesActions.CONVERTED_TO_DRAFT
  | TypesActions.LOCKED
  | TypesActions.UNLOCKED
  | TypesActions.ENQUEUED
  | TypesActions.DEQUEUED
  | TypesActions.MILESTONED
  | TypesActions.DEMILESTONED
  | TypesActions.REVIEW_REQUESTED
  | TypesActions.REVIEW_REQUESTED_REMOVED
  | TypesActions.AUTO_MERGE_ENABLED
  | TypesActions.AUTO_MERGE_DISABLED

type PullRequestReviewTypes = TypesActions.SUBMITTED
  | TypesActions.EDITED
  | TypesActions.DISMISSED

type PullRequestTargetTypes = TypesActions.ASSIGNED
  | TypesActions.UNASSIGNED
  | TypesActions.LABALED
  | TypesActions.UNLABALED
  | TypesActions.OPENED
  | TypesActions.EDITED
  | TypesActions.CLOSED
  | TypesActions.REOPENED
  | TypesActions.SYNCHRONIZE
  | TypesActions.CONVERTED_TO_DRAFT
  | TypesActions.READY_FOR_REVIEW
  | TypesActions.LOCKED
  | TypesActions.UNLOCKED
  | TypesActions.REVIEW_REQUESTED
  | TypesActions.REVIEW_REQUESTED_REMOVED
  | TypesActions.AUTO_MERGE_DISABLED
  | TypesActions.AUTO_MERGE_ENABLED

type RegistryPackageTypes = TypesActions.PUBLISHED
  | TypesActions.UPDATED

type ReleaseType = BasicTypes
  | TypesActions.PUBLISHED
  | TypesActions.UNPUBLISHED
  | TypesActions.PRERELEASED
  | TypesActions.RELEASED

type WatchTypes = TypesActions.STARTED

type WorkFlowRunTypes = TypesActions.COMPLETED
  | TypesActions.REQUESTED
  | TypesActions.IN_PROGRESS

export type EventTypes<T extends GitHubActionsEventTrigger> = T extends ActionsEventTrigger.BRANCH_PROTECTION_RULE
  ? BasicTypes | BasicTypes[]
  : T extends ActionsEventTrigger.CHECK_RUN 
  ? CheckRunTypes | CheckRunTypes[]
  : T extends ActionsEventTrigger.CHECK_SUITE
  ? TypesActions.COMPLETED
  : T extends ActionsEventTrigger.DISCUSSION
  ? DiscussionTypes | DiscussionTypes[]
  : T extends ActionsEventTrigger.DISCUSSION_COMMENT
  ? BasicTypes | BasicTypes[]
  : T extends ActionsEventTrigger.ISSUE_COMMENT
  ? BasicTypes | BasicTypes[]
  : T extends ActionsEventTrigger.ISSUES
  ? IssuesTypes | IssuesTypes[]
  : T extends ActionsEventTrigger.LABEL
  ? BasicTypes | BasicTypes[]
  : T extends ActionsEventTrigger.MILESTONE
  ? MilestoneTypes | MilestoneTypes[]
  : T extends ActionsEventTrigger.PROJECT
  ? ProjectTypes | ProjectTypes[]
  : T extends ActionsEventTrigger.PROJECT_COLUMN
  ? ProjectColumnTypes | ProjectColumnTypes[]
  : T extends ActionsEventTrigger.PULL_REQUEST
  ? PullRequestTypes | PullRequestTypes[]
  : T extends ActionsEventTrigger.PULL_REQUEST_REVIEW
  ? PullRequestReviewTypes | PullRequestReviewTypes[]
  : T extends ActionsEventTrigger.PULL_REQUEST_REVIEW_COMMENT
  ? BasicTypes | BasicTypes[]
  : T extends ActionsEventTrigger.PULL_REQUEST_TARGET
  ? PullRequestTargetTypes | PullRequestTargetTypes[]
  : T extends ActionsEventTrigger.REGISTRY_PACKAGE
  ? RegistryPackageTypes | RegistryPackageTypes[]
  : T extends ActionsEventTrigger.RELEASE
  ? ReleaseType | ReleaseType[]
  : T extends ActionsEventTrigger.WATCH
  ? WatchTypes | WatchTypes[]
  : T extends ActionsEventTrigger.WORKFLOW_RUN
  ? WorkFlowRunTypes | WorkFlowRunTypes[]
  : never;



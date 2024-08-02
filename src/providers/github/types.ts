export type GitHubActionsWorkflow = {
  name?: string;
  on: GitHubActionsEventTrigger | GitHubActionsEventTrigger[];
  jobs: Record<string, GitHubActionsJob>;
};

export type GitHubActionsEventTrigger =
  | 'push'
  | 'pull_request'
  | 'workflow_dispatch'
  | {
  schedule?: GitHubActionsSchedule[];
  'workflow_run'?: GitHubActionsWorkflowRun;
  [key: string]: any;
};

export type GitHubActionsSchedule = {
  cron: string;
};

export type GitHubActionsWorkflowRun = {
  workflows: string[];
  types: ('completed' | 'requested')[];
};

export type GitHubActionsJob = {
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

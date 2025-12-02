import type { Snippet } from "svelte";
import type { MouseEventHandler } from "svelte/elements";

export interface HeaderButtonProps {
  buttonID: string;
  state?: boolean;
  handler?: MouseEventHandler<HTMLButtonElement>;
}

export interface ProjectEntryProps {
  projectID: string;
  projectName: string;
  subject: string;
  clickHandler: (
    projectID: string, 
    projectName: string, 
    subject: string
  ) => void;
}

export interface ProjectSubjectT {
  id: string;
  project_name: string;
  subject: string;
}

export function checkProjectSubjectT (x: any): x is ProjectSubjectT {
  return (
    x !== null &&
    typeof x === 'object' &&
    typeof x.project_name === 'string' &&
    typeof x.id === 'string' &&
    typeof x.subject === 'string'
  )
}

// used for getProjectPerSub DAL function
export type ProjPerSub = Record<string, [string, string][]>;

export interface ProjectLangCodeT {
  lang: string;
  code: string;
}

//~ type guard for supabase requested data
export function checkProjectLangCodeT(x: any): x is ProjectLangCodeT {
  return (
    x != null &&
    typeof x === 'object' &&
    typeof x.lang === 'string' &&
    typeof x.code === 'string' &&
    (x.markdown === null || x.markdown === undefined || Array.isArray(x.markdown))
  )
}

export interface ProjectCommentT {
  line_no: number;
  comment_text: string;
}

export function checkProjectCommentT(x: any): x is ProjectCommentT {
  return (
    x != null &&
    typeof x === 'object' &&
    typeof x.line_no === 'number' &&
    typeof x.comment_text === 'string'
  )
}

export interface ProjectOPT {
  src: string;
  bg_color: string;
}

export function checkProjectOPT(x: any): x is ProjectOPT {
  return (
    x !== null &&
    typeof x === 'object' &&
    typeof x.src === 'string' &&
    typeof x.bg_color === 'string'
  )
}

export interface AboutCardProps {
  key: number;
  flipCount: number;
  frontpage?: Snippet;
  backpage?: Snippet | ((flipCount: number) => ReturnType<import("svelte").Snippet>);
}

export interface AboutPageMobProps {
  key: number;
  flipCount: number;
  frontpage?: Snippet | ((flipCount: number) => ReturnType<import("svelte").Snippet>);
  backpage?: Snippet | ((flipCount: number) => ReturnType<import("svelte").Snippet>);
}
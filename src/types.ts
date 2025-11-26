import type { Snippet } from "svelte";
import type { MouseEventHandler } from "svelte/elements";

export interface ObjCodebaseItemBody {
  lang: string;
  codeString: string;
  comments: { [key: string]: string } | {};
  outputSrcs: string[];
  bgColors: { [key: string]: string };
  markdown?: string[];
}

export interface ObjCodebaseItem {
  [key: string]: ObjCodebaseItemBody;
}

export interface ObjCodebase {
  "Sem_IV-DAOA": ObjCodebaseItem;
  "Sem_IV-SF": ObjCodebaseItem;
  "Sem_V-IS": ObjCodebaseItem;
  "Sem_VI-IPCV": ObjCodebaseItem;
  "Sem_VI-RL": ObjCodebaseItem;
  "Sem_VIII-SNA": ObjCodebaseItem;
}

export type subject = keyof ObjCodebase;

export interface HeaderButtonProps {
  buttonID: string;
  state?: boolean;
  handler?: MouseEventHandler<HTMLButtonElement>;
}

export interface ProjectEntryProps {
  projectID: string;
  projectName: string;
  clickHandler: (projectID: string, projectName: string) => void;
}

export interface ProjectBodyT {
  lang: string;
  code: string;
  markdown?: string[];
}

//~ type guard for supabase requested data
export function checkProjectBodyT(x: any): x is ProjectBodyT {
  return (
    x != null &&
    typeof x === 'object' &&
    typeof x.lang === 'string' &&
    typeof x.code === 'string' &&
    (x.markdown === null || x.markdown === undefined || Array.isArray(x.markdown))
  )
}

// used for getProjectPerSub DAL function
export type ProjPerSub = Record<string, [string, string][]>;

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
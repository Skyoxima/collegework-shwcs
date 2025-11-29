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

export interface ProjectLangCodeT {
  lang: string;
  code: string;
}

//~ type guard for supabase requested data
export function checkProjectBodyT(x: any): x is ProjectLangCodeT {
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

export type currentProjectMetaT = {
  subject: string,
  comments: { [key: string]: string },
  outputIMGs: { [key: string]: [string, string] },
  markdown: null | undefined | string[]
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
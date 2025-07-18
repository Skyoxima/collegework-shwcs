import type { Snippet } from "svelte";
import type { MouseEventHandler } from "svelte/elements";

export interface ObjCodebaseItemBody {
  lang: string;
  codeString: string;
  comments: { [key: string]: string } | {};
  outputSrcs: string[] | string;
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
  subjectName: subject;
  projectName: string;
  projectBody: ObjCodebaseItemBody;
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
import type { MouseEventHandler } from "svelte/elements";

export interface ObjCodebaseItemBody {
  lang: string;
  codeString: string;
  comments: { [key: string]: string } | {};
  outputSrcs: string[] | string;
  bgColors: { [key: string]: string };
  markdown?: Object;
}

export interface ObjCodebaseItem {
  [key: string]: ObjCodebaseItemBody;
}

export interface ObjCodebase {
  "Sem_IV-DAOA": ObjCodebaseItem;
  "Sem_IV-SF": ObjCodebaseItem;
  "Sem_V-IS": ObjCodebaseItem;
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

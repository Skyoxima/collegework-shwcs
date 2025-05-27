import type { MouseEventHandler } from "svelte/elements"

export interface ObjCodebaseBody {
    "lang": string
    "code_string_literal": string
    "comments": {[key: string]: string} | {}
    "OP_ss_srcs": string[] | string
}

export interface ObjCodebaseItem {
  [key: string]: ObjCodebaseBody
}

export interface ObjCodebase {
  "Sem_IV-DAOA": ObjCodebaseItem
  "Sem_IV-SF": ObjCodebaseItem
  "Sem_V-IS": ObjCodebaseItem
}

export type subject = keyof ObjCodebase


export interface HeaderButtonProps {
  iconKey: string 
  state?: boolean
  handler?: MouseEventHandler<HTMLButtonElement>
}

export interface ObjCodebaseBody {
    "lang": string
    "code_lines": Array<string>
    "code_string_literal": string
    "comments": {[key: string]: string} | {}
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

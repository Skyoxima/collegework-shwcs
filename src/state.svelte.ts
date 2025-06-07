import RawObjCodebase from "./data/Object_based_Codebase.json";
import type { ObjCodebase, ObjCodebaseBody, subject } from "./types";

const Codebase: ObjCodebase = RawObjCodebase;
const subjects = Object.keys(Codebase) as subject[];
export const CodebaseEntries = Object.entries(Codebase) as [
  subject,
  ObjCodebaseBody
][];

// const initSubject = subjects[0];
const initSubject = subjects[1];
const initProjectBody = Codebase[initSubject]["Memory_Page_Replacement.py"];

export let currentProject = $state({
  subject: initSubject,
  // projectName: "QuickSort.py",
  projectName: "Memory_Page_Replacement.py",
  projectBody: initProjectBody,
});

export let currHltdLine = $state({ value: 0 });
export let modalSwitch = $state({ value: false });

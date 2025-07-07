import RawObjCodebase from "./data/Object_based_Codebase.json";
import type { ObjCodebase, ObjCodebaseItemBody, subject } from "./types";

const Codebase: ObjCodebase = RawObjCodebase;
const subjects = Object.keys(Codebase) as subject[];
export const CodebaseEntries = Object.entries(Codebase) as [
  subject,
  ObjCodebaseItemBody
][];

// const initSubject = subjects[0];
const initSubject = subjects[subjects.length - 1];
const initProjectBody = Codebase[initSubject]["Random_Graph"];

export let currentProject = $state({
  subject: initSubject,
  // projectName: "QuickSort.py",
  projectName: "Random_Graph",
  projectBody: initProjectBody,
});

export let currHltdLine = $state({ value: 0 });
export let showAboutModal = $state({ value: false });
export let currentImage = $state({src: ''})
// export let currentImage = $state({src: 'OP_ss/Sem_IV-SF/Memory_Page_Replacement/MPR_FIFO_OP_1.png'})

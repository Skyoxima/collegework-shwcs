import RawObjCodebase from './data/Object_based_Codebase.json'
import type { ObjCodebase, ObjCodebaseBody, subject } from './types';

const Codebase: ObjCodebase = RawObjCodebase;
const subjects = Object.keys(Codebase) as subject[]
export const CodebaseEntries = Object.entries(Codebase) as [subject, ObjCodebaseBody][]

const initSubject = subjects[0]
const initProjectBody = Codebase[initSubject]["QuickSort.py"]

export let currentProject = $state({
  subject: initSubject,
  projectName: "Quicksort.py",
  projectBody: initProjectBody
})
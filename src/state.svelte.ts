import RawObjCodebase from './data/Object_based_Codebase.json'
import type { ObjCodebase, ObjCodebaseBody, subject } from './types';

const Codebase: ObjCodebase = RawObjCodebase;
const subjects = Object.keys(Codebase) as subject[]
export const CodebaseEntries = Object.entries(Codebase) as [subject, ObjCodebaseBody][]

const initSubject = subjects[1]
const initProjectBody = Codebase[initSubject]["Restoring_Division.py"]

export let currentProject = $state({
  subject: initSubject,
  // projectName: "Quicksort.py",
  projectName: "Restoring_Division.py",
  projectBody: initProjectBody
})

export let currHltdLine = $state({value: 0})
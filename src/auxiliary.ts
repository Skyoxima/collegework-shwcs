import { subjectFullnames } from "./constants";

export function processAlt(src: string) {
  const srcSplits = src.split("/");
  return srcSplits[srcSplits.length - 1];
}

export function processSubjectName(subjectCode: string) {
  return subjectFullnames[subjectCode.split("-")[1]]
}

export function processSemesterName(subjectCode: string) {
  const semesterFull = subjectCode.split('-')[0].split('_')
  return `${semesterFull[0]}ester-${semesterFull[1]}`
}

export function isDesktop() {
  return window.matchMedia('screen and (width >= 64rem)').matches;
}

export function processProjectEntry(projectName: string) {
  if (projectName.includes("_w_")) {
    projectName = projectName.replace("_w_", "_with_")
  }
  return projectName.replaceAll("_", " "); 
}
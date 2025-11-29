import { subjectFullnames } from "../../constants";

export function processSubjectName(subjectCode: string) {
  return subjectCode ? subjectFullnames[subjectCode.split("-")[1]] : '';
}

export function processSemesterName(subjectCode: string) {
  if(subjectCode) {
    const semesterFull = subjectCode.split('-')[0].split('_')
    return `${semesterFull[0]}ester-${semesterFull[1]}`
  } else {
    return '';
  }
}

export function isDesktop() {
  return window.matchMedia('screen and (width >= 64rem)').matches;
}
import { supabase } from "./state.svelte";
import {
  checkProjectCommentT,
  checkProjectLangCodeT,
  checkProjectSubjectT,
  checkProjectOPT,
  type ProjectCommentT,
  type ProjectLangCodeT,
  type ProjectSubjectT,
  type ProjPerSub,
  type ProjectOPT,
} from "./types";

// >> I wonder if I should make classes/prototypes for these functions? Consolidating functions would be good but I don't really have a need for common private variables...?
async function fetchProjectsSubjects(): Promise<ProjectSubjectT[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("project_name,id,subject")
    .order("subject");

  if (error) throw error;
  if (!data.every(checkProjectSubjectT))
    throw new Error("Invalid response from the Database...");

  return data;
}

function zipProjectsSubject(data: ProjectSubjectT[]) {
  const projectsPerSubject: ProjPerSub = {};

  for (const row of data) {
    if (row.subject in projectsPerSubject)
      projectsPerSubject[row.subject].push([row.id, row.project_name]);
    else projectsPerSubject[row.subject] = [[row.id, row.project_name]];
  }

  return projectsPerSubject;
}

export async function getProjectsPerSubject(): Promise<ProjPerSub> {
  const LSKey = `PPS`;
  const cache = localStorage.getItem(LSKey);

  if (cache) return JSON.parse(cache);

  // will only reach here if there is no cache in the browser
  const data = await fetchProjectsSubjects();
  const projectsPerSubject = zipProjectsSubject(data);
  localStorage.setItem("PPS", JSON.stringify(projectsPerSubject));
  return projectsPerSubject;
}

// Claude suggested separated fetching and setting so did this.
async function fetchCurrentProjectLangCode(
  projectID: string
): Promise<ProjectLangCodeT> {
  const { data, error } = await supabase
    .from("projects")
    .select("lang,code")
    .eq("id", projectID)
    .single();

  if (error) throw error;
  if (!checkProjectLangCodeT(data))
    throw new Error("Invalid response from the Database...");

  return data;
}

// ~ It's better to pass arguments even if global state, good for testing
export async function getCurrentProjectLangCode(
  projectID: string
): Promise<ProjectLangCodeT> {
  const LSKey = `${projectID}-code`;
  const cache = localStorage.getItem(LSKey);

  if (cache) return JSON.parse(cache);

  // will only reach here if there is nothing in LS
  const data = await fetchCurrentProjectLangCode(projectID);
  localStorage.setItem(LSKey, JSON.stringify(data));
  return data;
}

async function fetchCurrentProjectComments(
  projectID: string
): Promise<ProjectCommentT[]> {
  const { data, error } = await supabase
    .from("projects_comments")
    .select("line_no,comment_text")
    .eq("project_id", projectID);

  if (error) throw error;
  if (!data.every(checkProjectCommentT))
    throw new Error("Invalid response from the Database...");

  return data;
}

function processComments(comments: ProjectCommentT[]) {
  const pairedComments: { [key: string]: string } = {};
  for (const comment_body of comments) {
    pairedComments[comment_body.line_no] = comment_body.comment_text;
  }

  return pairedComments;
}

export async function getCurrentProjectComments(
  projectID: string
): Promise<{ [key: string]: string }> {
  const LSKey = `${projectID}-comments`;
  const cache = localStorage.getItem(LSKey);

  if (cache) return JSON.parse(cache);

  const data = await fetchCurrentProjectComments(projectID);
  const pairedComments = processComments(data);
  localStorage.setItem(LSKey, JSON.stringify(pairedComments));
  return pairedComments;
}

async function fetchCurrentProjectOPImgs(
  projectID: string
): Promise<ProjectOPT[]> {
  const { data, error } = await supabase
    .from("projects_outputs")
    .select("src,bg_color")
    .eq("project_id", projectID);

  if (error) throw error;
  if (!data.every(checkProjectOPT))
    throw new Error("Invalid response from the Database...");

  return data;
}

function makeOPIMGsDict(data: ProjectOPT[]) {
  const dict: { [key: string]: string } = {};

  for (const index in data) {
    dict[data[index].src] = data[index].bg_color;
  }

  return dict;
}

export async function getCurrentProjectOPImgs(
  projectID: string
): Promise<{ [key: string]: string }> {
  const LSKey = `${projectID}-OP`;
  const cache = localStorage.getItem(LSKey);

  if (cache) return JSON.parse(cache);

  const data = await fetchCurrentProjectOPImgs(projectID);
  const dict = makeOPIMGsDict(data);
  localStorage.setItem(LSKey, JSON.stringify(dict));
  return dict;
}

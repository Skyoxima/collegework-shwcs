import { currentProject, supabase } from './state.svelte';
import { checkProjectBodyT, type ProjectBodyT, type ProjPerSub } from './types';


export async function getProjectsPerSubject(): Promise<ProjPerSub> {
  // storing in localStorage for unrepetitive Supabase invocation (since leftSheet uses this and it will open/close many times)
  if (!localStorage.getItem('PPS')) {
    const { data, error } = await supabase
      .from('projects')
      .select('project_name,id,subject')
      .order('subject')
    if (error) throw error;
    
    // Reducing to to subject: [[projectID, projectName]] pair
    const projectsPerSubject: ProjPerSub = {}
    for (const row of data) {
      if (row.subject in projectsPerSubject)
        projectsPerSubject[row.subject].push([row.id, row.project_name]);
      else
        projectsPerSubject[row.subject] = [[row.id, row.project_name]];
    }
    
    localStorage.setItem('PPS', JSON.stringify(projectsPerSubject));
    return projectsPerSubject;
    
  } else {
    const retrieved = localStorage.getItem('PPS');
    let projectsPerSubject: ProjPerSub = {};
    // proper type checking
    if(retrieved) {
      const parsed = JSON.parse(retrieved);
      if (typeof parsed === 'object' && parsed !== null) {
        projectsPerSubject = parsed as ProjPerSub;
      }
    }
    
    return projectsPerSubject;
  }
}

export async function getProjectBody(): Promise<ProjectBodyT> {
  const LSKey = `${currentProject.projectDBID}-code`;

  // first time fetch.
  if (!localStorage.getItem(LSKey)) {
    const { data, error } = await supabase
      .from('projects')
      .select('lang,code,markdown')
      .eq('id', currentProject.projectDBID)
      .single()
    if (error) throw error;
    if (!checkProjectBodyT(data)) throw new Error("Invalid project body from DB");
    
    localStorage.setItem(LSKey, JSON.stringify(data));
    return data;
  }

  // if already exists in localStorage
  const raw = localStorage.getItem(LSKey);
  if (!raw) throw new Error('Cache unavailable...') // TODO add a re-call to retrieve from supabase
  const parsed = JSON.parse(raw);
  if (!checkProjectBodyT(parsed)) throw new Error("Cached project body is invalid");

  return parsed;
}

export async function getProjectComments(projectName: string) {
  if(!localStorage.getItem(`${projectName}_comments`)) {
    
  } else {

  }
}
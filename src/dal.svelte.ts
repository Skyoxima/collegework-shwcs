import { currentProject, supabase } from './state.svelte';
import { type ProjPerSub } from './types';


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

export async function getProjectBody() {
  if(!localStorage.getItem('PB')) {
    if(currentProject.projectDBID !== '') {
      const { data, error } = await supabase
        .from('projects')
        .select('lang,code,markdown')
        .eq('id', currentProject.projectDBID)
        .single()
      if (error) throw error;
  
      console.log(data)
      return data
    }
  }
}

export async function getProjectComments(projectName: string) {
  if(!localStorage.getItem(`${projectName}_comments`)) {
    
  } else {

  }
}
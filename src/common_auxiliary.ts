export function processAlt(src: string) {
  const srcSplits = src.split("/");
  return srcSplits[srcSplits.length - 1];
}

export function processProjectEntry(projectName: string) {
  if (projectName.includes("_w_")) {
    projectName = projectName.replace("_w_", "_with_")
  }
  return projectName.replaceAll("_", " "); 
}
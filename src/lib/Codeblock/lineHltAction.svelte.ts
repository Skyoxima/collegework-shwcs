import { currHltdLine, currentProject } from "../../state.svelte";
import type { Action } from "svelte/action";

export const lineHlt: Action = (node: HTMLElement) => {
    // I want to keep a pointer to all the children span nodes once the whole 'code' block is mounted
    const allLines = node.querySelectorAll('span.line');
    

    // TODO: ENABLE AFTER CORRECT SUPABASE MIGRATION
    // effect tracks currHltdLine... now I want to only apply this to the number mentioned in this variable and remove from the rest if existed
    // to make it more efficient, I can use the keys of the comments properties to only check for those who could possibly have the highlights
    $effect(() => {
      if (currHltdLine.value > 0) {
        // this will be O(m), m being the number of comments for the codeblock. Previously this was O(n) with n being the number of lines
        for (const hltable of Object.keys(currentProject.projectBody.comments).map((val) => Number(val) - 1)) {
          allLines[hltable].classList.remove('highlighted-line');
        }

        allLines[currHltdLine.value - 1].classList.add('highlighted-line');
        allLines[currHltdLine.value - 1].scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "start",
        })
      }
    })
  }
import { currHltdLine } from "../../state.svelte";
import type { Action } from "svelte/action";

export const lineHlt: Action = (node: HTMLElement) => {
  const allLines = node.querySelectorAll("span.line");

  $effect(() => {
    if (currHltdLine.value > 0) {

      if (currHltdLine.prev > 0)
        allLines[currHltdLine.prev - 1].classList.remove('highlighted-line')

      allLines[currHltdLine.value - 1].classList.add("highlighted-line");
      allLines[currHltdLine.value - 1].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
    
    // this runs before the next effect... this is kind of replication useState's prev => ...
    return () => {
      currHltdLine.prev = currHltdLine.value;
    }
  });
};

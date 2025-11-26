//>> This is the entire code for generating the codeblock via ShikiJS
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeShikiFromHighlighter from "@shikijs/rehype/core";
import { createHighlighterCore } from "shiki/core";
import { createOnigurumaEngine } from "shiki/engine/oniguruma";
import rehypeStringify from "rehype-stringify";
import type { HighlighterCore, HighlighterGeneric } from "shiki/core";

export async function shikiInstance() {
  // ~ code-splitting for not importing the whole shiki library... that's why have to use shiki instead of rehype-pretty-code
  const highlighter = await createHighlighterCore({
    themes: [import("@shikijs/themes/kanagawa-dragon")],
    langs: [import("@shikijs/langs/python"), import("@shikijs/langs/c")],
    engine: createOnigurumaEngine(() => import("shiki/wasm")),
  });

  return highlighter;
}

export default async function processCode(lang: string, codeString: string, highlighter: HighlighterCore) {
  const markdown = "```" + lang + "\n" + codeString;

  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    // TODO: This Generic type casting is a temporary fix
    .use(
      rehypeShikiFromHighlighter,
      highlighter as HighlighterGeneric<any, any>,
      { theme: "kanagawa-dragon" }
    )
    .use(rehypeStringify)
    .process(markdown);

  return file.toString();
}

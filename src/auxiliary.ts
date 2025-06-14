export function processAlt(src: string) {
    const srcSplits = src.split("/");
    return srcSplits[srcSplits.length - 1];
}
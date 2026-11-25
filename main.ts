// One-Line Office Jokes — make.fun entry
//
// The joke: an out-of-office auto-reply promises a response "when I'm back".
// The setup sounds like a normal inbox complaint; the punch lands in the
// last few words, when the 300 unread emails turn out to be people asking
// the exact question the auto-reply was supposed to answer.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My out-of-office reply said I'd respond when I'm back, so I returned to 300 emails asking when I'll be back.";

function main(): void {
  // The gate: 1-199 characters, not only whitespace, a single line.
  if (!JOKE.trim()) {
    console.error("error: joke is blank");
    process.exit(1);
  }
  if (JOKE.length < 1 || JOKE.length > 199) {
    console.error(`error: joke is ${JOKE.length} characters, must be 1-199`);
    process.exit(1);
  }
  if (JOKE.includes("\n") || JOKE.includes("\r")) {
    console.error("error: joke must be a single line");
    process.exit(1);
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
}

main();

// One-Line Office Jokes — make.fun entry
//
// My joke turns on the office printer, the machine everyone knows
// jams at the worst possible moment. The setup is a desperate plea:
// please stop jamming when a deadline is looming. The twist waits
// until the very end — the printer finally agrees, and the one
// document it produces flawlessly is a resignation letter. The
// laugh lands on the final beat, "in triplicate": the printer
// wasn't just cooperating, it was enthusiastically helping me quit.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I begged the printer to stop jamming on deadline day, so it printed my resignation letter flawlessly — in triplicate.";

const MAX_CHARS = 199;

function main(): void {
  if (JOKE.trim().length === 0) {
    throw new Error("joke must not be empty or only whitespace");
  }
  if (JOKE.length > MAX_CHARS) {
    throw new Error(
      `joke is ${JOKE.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (JOKE.includes("\n") || JOKE.includes("\r")) {
    throw new Error("joke must stay on a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
}

main();

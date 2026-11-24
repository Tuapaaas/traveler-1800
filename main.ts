// One Sentence for a Traveler from 1800 — make.fun bounty entry.
//
// The entry is a single sentence (138 characters) explaining the modern
// internet to someone arriving from 1800, built only from things they
// already know: a road, letters, books, and whispered gossip.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "Picture a road that carries every letter, every book, and every whispered gossip to any door on earth in the blink of an eye.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
}

main();

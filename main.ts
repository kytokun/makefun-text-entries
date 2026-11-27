import { writeFileSync, mkdirSync } from "node:fs";

// u-0xkianno-one-word-from-grandma-f04bed16
// One word and nothing else: the single word grandma would text about AI.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "Astaga");

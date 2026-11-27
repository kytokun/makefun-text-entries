import { writeFileSync, mkdirSync } from "node:fs";

// u-suroto-two-sentence-horror-acea9253
// Two-Sentence Horror.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "The delivery app says my package was handed to a family member. I live alone, and the door never opened.");
